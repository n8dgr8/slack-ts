export interface StaticChannelsSetTopicArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}

export interface ChannelsSetTopicArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}
