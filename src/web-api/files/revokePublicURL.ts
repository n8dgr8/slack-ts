export interface StaticFilesRevokePublicUrlArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to revoke
   */
  file: string;
}

export interface FilesRevokePublicUrlArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to revoke
   */
  file: string;
}
