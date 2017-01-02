export interface StaticFilesSharedPublicUrlArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to share
   */
  file: string;
}

export interface FilesSharedPublicUrlArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to share
   */
  file: string;
}
