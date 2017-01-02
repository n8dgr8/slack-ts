export interface StaticChannelsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:read
   */
  token: string;

  /**
   * Don't return archived channels.
   */
  exclude_archived?: boolean;
}

export interface ChannelsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:read
   */
  token?: string;

  /**
   * Don't return archived channels.
   */
  exclude_archived?: boolean;
}
