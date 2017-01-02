export interface StaticChatDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: chat:write:bot or chat:write:user
   */
  token: string;

  /**
   * Timestamp of the message to be deleted.
   */
  ts: number;

  /**
   * Channel containing the message to be deleted.
   */
  channel: string;

  /**
   * Pass true to delete the message as the authed user. Bot users in this context are considered authed users.
   */
  as_user?: boolean;
}

export interface ChatDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: chat:write:bot or chat:write:user
   */
  token?: string;

  /**
   * Timestamp of the message to be deleted.
   */
  ts: number;

  /**
   * Channel containing the message to be deleted.
   */
  channel: string;

  /**
   * Pass true to delete the message as the authed user. Bot users in this context are considered authed users.
   */
  as_user?: boolean;
}
