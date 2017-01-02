export interface StaticChannelsUnarchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to unarchive
   */
  channel: string;
}

export interface ChannelsUnarchiveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to unarchive
   */
  channel: string;
}
