import { Endpoint } from './interfaces/endpoint';
import { Argument } from './interfaces/argument';
import * as mkdirp from 'mkdirp';
import * as changeCase from 'change-case';
import * as fs from 'fs';
import * as path from 'path';

export default function buildFiles(endpoints: Endpoint[]) {
  endpoints.forEach((endpoint: Endpoint) => {
    const fileContents = buildFileContents(endpoint);

    const splitApiUrl = endpoint.url.split('.');
    const fileName = splitApiUrl.pop() + '.ts';
    const folderPath = path.join(__dirname, '..', 'src', 'web-api', ...splitApiUrl);

    mkdirp.sync(folderPath);
    fs.writeFile(path.join(folderPath, fileName), fileContents);
  });
}

function buildFileContents(endpoint: Endpoint): string {
  const staticArguments = buildStaticArguments(endpoint);
  const argumentsWithOptionalToken = buildArgumentsWithOptionalToken(endpoint);
  buildEndpointResponse(endpoint);
  buildEndpointFunction(endpoint);

  return `${staticArguments}
${argumentsWithOptionalToken}`;
}

function buildJSDoc(description) {
  const jsdoc = description
    .replace(/\n/g, '\n   * ')
    .trim()
    .replace(/\n   \* /, '\n   *\n   * ')
    .replace(/\n   \*$/g, '')
    .replace(/(\w+)\.(\w+)/g, '$1. $2')
    .replace(/(.*)\n   \*\n   \* \n   /g, '$1\n   ')
    .replace(/(\n   \* ){3}/, '\n   *\n   * ')
    .replace(/(\w+) \- (\w+)/g, '- "$1" - $2');

  return `  /**
   * ${jsdoc}
   */`;
}

function buildStaticArguments(endpoint: Endpoint): string {
  const pascalCaseEndpoint = changeCase.pascalCase(endpoint.url.replace('.', ' '));
  const requiredArgument = (argument: Argument) => {
    return argument.required || argument.argument === '[propName: string]'
      ? ''
      : '?';
  };

  const endpointArguments = endpoint
    .arguments
    .map((argument) => {
      return `${buildJSDoc(argument.description)}
  ${argument.argument}${requiredArgument(argument)}: ${argument.type};`;
    }).join('\n\n');

  let staticArguments = `export interface Static${pascalCaseEndpoint}Arguments {
${endpointArguments}
}
`;

  return staticArguments;
}

function buildArgumentsWithOptionalToken(endpoint: Endpoint): string {
  return buildStaticArguments(endpoint)
    .replace('interface Static', 'interface ')
    .replace('  token:', '  token?:');
}

function buildEndpointResponse(endpoint: Endpoint) { }

function buildEndpointFunction(endpoint: Endpoint) { }
