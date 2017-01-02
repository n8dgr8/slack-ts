export interface StaticFilesDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * ID of file to delete.
   */
  file: string;
}

export interface FilesDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * ID of file to delete.
   */
  file: string;
}
