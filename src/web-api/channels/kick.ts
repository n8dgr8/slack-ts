export interface StaticChannelsKickArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from channel.
   */
  user: string;
}

export interface ChannelsKickArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from channel.
   */
  user: string;
}
