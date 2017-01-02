export interface StaticChannelsLeaveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to leave
   */
  channel: string;
}

export interface ChannelsLeaveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to leave
   */
  channel: string;
}
