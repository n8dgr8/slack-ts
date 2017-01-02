export interface StaticApiTestArguments {
  /**
   * Error response to return
   */
  error?: string;

  /**
   * example property to return
   */
  [propName: string]: any;
}

export interface ApiTestArguments {
  /**
   * Error response to return
   */
  error?: string;

  /**
   * example property to return
   */
  [propName: string]: any;
}
