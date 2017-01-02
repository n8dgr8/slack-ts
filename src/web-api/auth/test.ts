export interface StaticAuthTestArguments {
  /**
   * Authentication token.
   *
   * Requires scope: identify
   */
  token: string;
}

export interface AuthTestArguments {
  /**
   * Authentication token.
   *
   * Requires scope: identify
   */
  token?: string;
}
