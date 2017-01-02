export interface StaticMpimOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.
   */
  users: string;
}

export interface MpimOpenArguments {
  /**
   * Authentication token.
   *
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.
   */
  users: string;
}
