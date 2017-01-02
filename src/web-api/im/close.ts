export interface StaticImCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token: string;

  /**
   * Direct message channel to close.
   */
  channel: string;
}

export interface ImCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token?: string;

  /**
   * Direct message channel to close.
   */
  channel: string;
}
