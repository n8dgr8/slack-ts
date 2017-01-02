export interface StaticChannelsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:read
   */
  token: string;

  /**
   * Channel to get info on
   */
  channel: string;
}

export interface ChannelsInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:read
   */
  token?: string;

  /**
   * Channel to get info on
   */
  channel: string;
}
