import * as cheerio from 'cheerio';
import * as got from 'got';
import { Endpoint } from './interfaces/endpoint';
import { Argument } from './interfaces/argument';
import determineType from './determine-type';
import buildEndpointFiles from './generate-endpoint-files';

async function buildWebApiEndpoint() {
  try {
    const result = await got('https://api.slack.com/methods');
    const endpoints: Endpoint[] = await getEndpointsAndDescriptions(result);
    const endpointWithArguments: Endpoint[] = await getEndpointArgument(endpoints);

    buildEndpointFiles(endpointWithArguments);
  } catch (e) {
    console.log(e);
  }
}

function getEndpointsAndDescriptions(response: any): Endpoint[] {
  const $ = cheerio.load(response.body);
  const rows = $('#api_main_content table tr').slice(1);

  return rows.map((index, row) => {
    if ($(row.children[1]).text() === 'Method') { return; }

    const endpoint: Endpoint = {
      url: $(row.children[1]).text(),
      description: $(row.children[3]).text()
    };

    return endpoint;
  }).get() as any as Endpoint[];
}

// TODO: Clean up
function getEndpointArgument(endpoints: Endpoint[]) {
  const promises = [];

  endpoints.forEach((endpoint) => {
    const promise = got(`https://api.slack.com/methods/${endpoint.url}`)
      .then((response) => {
        const $ = cheerio.load(response.body);
        const args = $('.arguments.full_width').first().children('tr').slice(1);
        const params: Argument[] = args.map((index: number, element: CheerioElement) => {
          const columns = $(element).children('td');
          let argument = $(columns[0]).text();
          const exampleParameter = $(columns.get(1)).text();
          const requiredText = $(columns.get(2)).text();
          const required = $(columns.get(2)).text() === 'Required';
          const description = $(columns.get(3)).text();
          let type = determineType(argument, exampleParameter, requiredText, description, endpoint.url);

          if (endpoint.url === 'api.test' && argument === 'foo') {
            argument = '[propName: string]';
            type = 'any';
          }

          return {
            argument,
            type,
            required,
            description
          };
        }).get() as any as Argument[];

        endpoint.arguments = params;
        return endpoint;
      });

    promises.push(promise);
  });

  return Promise.all(promises);
}

buildWebApiEndpoint();
