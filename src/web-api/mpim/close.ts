export interface StaticMpimCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * MPIM to close.
   */
  channel: string;
}

export interface MpimCloseArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * MPIM to close.
   */
  channel: string;
}
