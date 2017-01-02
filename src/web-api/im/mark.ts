export interface StaticImMarkArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token: string;

  /**
   * Direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}

export interface ImMarkArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token?: string;

  /**
   * Direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}
