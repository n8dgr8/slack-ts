export interface StaticPinsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: pins:read
   */
  token: string;

  /**
   * Channel to get pinned items for.
   */
  channel: string;
}

export interface PinsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: pins:read
   */
  token?: string;

  /**
   * Channel to get pinned items for.
   */
  channel: string;
}
