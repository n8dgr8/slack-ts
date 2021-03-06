export interface StaticImOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token: string;

  /**
   * User to open a direct message channel with.
   */
  user: string;

  /**
   * Boolean, indicates you want the full IM channel definition in the response.
   */
  return_im?: string;
}

export interface ImOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: im:write
   */
  token?: string;

  /**
   * User to open a direct message channel with.
   */
  user: string;

  /**
   * Boolean, indicates you want the full IM channel definition in the response.
   */
  return_im?: string;
}
