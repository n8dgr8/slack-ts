export interface StaticChannelsCreateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Name of channel to create
   */
  name: string;
}

export interface ChannelsCreateArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Name of channel to create
   */
  name: string;
}
