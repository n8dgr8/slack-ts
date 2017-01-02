import { Argument } from './argument';

export interface Endpoint {
  url: string;
  description: string;
  fileContents?: string;
  arguments?: Argument[];
}
