export interface StaticMpimListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:read
   */
  token: string;
}

export interface MpimListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:read
   */
  token?: string;
}
