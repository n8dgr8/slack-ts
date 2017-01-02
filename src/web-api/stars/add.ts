export interface StaticStarsAddArguments {
  /**
   * Authentication token.
   *
   * Requires scope: stars:write
   */
  token: string;

  /**
   * File to add star to.
   */
  file?: string;

  /**
   * File comment to add star to.
   */
  file_comment?: string;

  /**
   * Channel to add star to, or channel where the message to add star to was posted (used with timestamp).
   */
  channel?: string;

  /**
   * Timestamp of the message to add star to.
   */
  timestamp?: number;
}

export interface StarsAddArguments {
  /**
   * Authentication token.
   *
   * Requires scope: stars:write
   */
  token?: string;

  /**
   * File to add star to.
   */
  file?: string;

  /**
   * File comment to add star to.
   */
  file_comment?: string;

  /**
   * Channel to add star to, or channel where the message to add star to was posted (used with timestamp).
   */
  channel?: string;

  /**
   * Timestamp of the message to add star to.
   */
  timestamp?: number;
}
