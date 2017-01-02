export interface StaticChannelsArchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to archive
   */
  channel: string;
}

export interface ChannelsArchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to archive
   */
  channel: string;
}
