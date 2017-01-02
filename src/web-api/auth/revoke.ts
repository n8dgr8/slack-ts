export interface StaticAuthRevokeArguments {
  /**
   * Authentication token.
   */
  token?: string;

  /**
   * Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.
   */
  test?: boolean;
}

export interface AuthRevokeArguments {
  /**
   * Authentication token.
   */
  token?: string;

  /**
   * Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.
   */
  test?: boolean;
}
