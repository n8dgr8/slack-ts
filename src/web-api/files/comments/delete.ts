export interface StaticFilesCommentsDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to delete a comment from.
   */
  file: string;

  /**
   * The comment to delete.
   */
  id: string;
}

export interface FilesCommentsDeleteArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to delete a comment from.
   */
  file: string;

  /**
   * The comment to delete.
   */
  id: string;
}
