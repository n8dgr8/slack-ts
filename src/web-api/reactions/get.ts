export interface StaticReactionsGetArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reactions:read
   */
  token: string;

  /**
   * File to get reactions for.
   */
  file?: string;

  /**
   * File comment to get reactions for.
   */
  file_comment?: string;

  /**
   * Channel where the message to get reactions for was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to get reactions for.
   */
  timestamp?: number;

  /**
   * If true always return the complete reaction list.
   */
  full?: string;
}

export interface ReactionsGetArguments {
  /**
   * Authentication token.
   *
   * Requires scope: reactions:read
   */
  token?: string;

  /**
   * File to get reactions for.
   */
  file?: string;

  /**
   * File comment to get reactions for.
   */
  file_comment?: string;

  /**
   * Channel where the message to get reactions for was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to get reactions for.
   */
  timestamp?: number;

  /**
   * If true always return the complete reaction list.
   */
  full?: string;
}
