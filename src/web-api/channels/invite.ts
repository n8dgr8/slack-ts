export interface StaticChannelsInviteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to invite user to.
   */
  channel: string;

  /**
   * User to invite to channel.
   */
  user: string;
}

export interface ChannelsInviteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to invite user to.
   */
  channel: string;

  /**
   * User to invite to channel.
   */
  user: string;
}
