export interface StaticChannelsJoinArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Name of channel to join
   */
  name: string;
}

export interface ChannelsJoinArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Name of channel to join
   */
  name: string;
}
