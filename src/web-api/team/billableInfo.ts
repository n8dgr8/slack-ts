export interface StaticTeamBillableInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: admin
   */
  token: string;

  /**
   * A user to retrieve the billable information for. Defaults to all users.
   */
  user?: string;
}

export interface TeamBillableInfoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: admin
   */
  token?: string;

  /**
   * A user to retrieve the billable information for. Defaults to all users.
   */
  user?: string;
}
