export interface StaticChannelsSetPurposeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}

export interface ChannelsSetPurposeArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}
