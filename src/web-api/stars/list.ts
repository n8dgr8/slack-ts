export interface StaticStarsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: stars:read
   */
  token: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface StarsListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: stars:read
   */
  token?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
