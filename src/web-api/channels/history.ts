export interface StaticChannelsHistoryArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:history
   */
  token: string;

  /**
   * Channel to fetch history for.
   */
  channel: string;

  /**
   * End of time range of messages to include in results.
   */
  latest?: number | 'now';

  /**
   * Start of time range of messages to include in results.
   */
  oldest?: number;

  /**
   * Include messages with latest or oldest timestamp in results.
   */
  inclusive?: boolean;

  /**
   * Number of messages to return, between 1 and 1000.
   */
  count?: number;

  /**
   * Include unread_count_display in the output?
   */
  unreads?: boolean;
}

export interface ChannelsHistoryArguments {
  /**
   * Authentication token.
   *
   * Requires scope: channels:history
   */
  token?: string;

  /**
   * Channel to fetch history for.
   */
  channel: string;

  /**
   * End of time range of messages to include in results.
   */
  latest?: number | 'now';

  /**
   * Start of time range of messages to include in results.
   */
  oldest?: number;

  /**
   * Include messages with latest or oldest timestamp in results.
   */
  inclusive?: boolean;

  /**
   * Number of messages to return, between 1 and 1000.
   */
  count?: number;

  /**
   * Include unread_count_display in the output?
   */
  unreads?: boolean;
}
