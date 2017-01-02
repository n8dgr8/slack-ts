export interface StaticTeamIntegrationLogsArguments {
  /**
   * Authentication token.
   *
   * Requires scope: admin
   */
  token: string;

  /**
   * Filter logs to this service. Defaults to all logs.
   */
  service_id?: string;

  /**
   * Filter logs to this Slack app. Defaults to all logs.
   */
  app_id?: string;

  /**
   * Filter logs generated by this user’s actions. Defaults to all logs.
   */
  user?: string;

  /**
   * Filter logs with this change type. Defaults to all logs.
   */
  change_type?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface TeamIntegrationLogsArguments {
  /**
   * Authentication token.
   *
   * Requires scope: admin
   */
  token?: string;

  /**
   * Filter logs to this service. Defaults to all logs.
   */
  service_id?: string;

  /**
   * Filter logs to this Slack app. Defaults to all logs.
   */
  app_id?: string;

  /**
   * Filter logs generated by this user’s actions. Defaults to all logs.
   */
  user?: string;

  /**
   * Filter logs with this change type. Defaults to all logs.
   */
  change_type?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
