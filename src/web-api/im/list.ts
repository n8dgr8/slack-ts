export interface StaticImListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:read
   */
  token: string;
}

export interface ImListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:read
   */
  token?: string;
}
