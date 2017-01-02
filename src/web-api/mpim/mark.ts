export interface StaticMpimMarkArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * multiparty direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}

export interface MpimMarkArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * multiparty direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}
