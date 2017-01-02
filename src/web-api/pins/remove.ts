export interface StaticPinsRemoveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: pins:write
   */
  token: string;

  /**
   * Channel where the item is pinned to.
   */
  channel: string;

  /**
   * File to un-pin.
   */
  file?: string;

  /**
   * File comment to un-pin.
   */
  file_comment?: string;

  /**
   * Timestamp of the message to un-pin.
   */
  timestamp?: number;
}

export interface PinsRemoveArguments {
  /**
   * Authentication token.
   *
   * Requires scope: pins:write
   */
  token?: string;

  /**
   * Channel where the item is pinned to.
   */
  channel: string;

  /**
   * File to un-pin.
   */
  file?: string;

  /**
   * File comment to un-pin.
   */
  file_comment?: string;

  /**
   * Timestamp of the message to un-pin.
   */
  timestamp?: number;
}
