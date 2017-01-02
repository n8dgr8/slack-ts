export interface StaticChannelsRenameArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to rename
   */
  channel: string;

  /**
   * New name for channel.
   */
  name: string;
}

export interface ChannelsRenameArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to rename
   */
  channel: string;

  /**
   * New name for channel.
   */
  name: string;
}
