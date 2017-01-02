export interface StaticFilesCommentsEditArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File containing the comment to edit.
   */
  file: string;

  /**
   * The comment to edit.
   */
  id: string;

  /**
   * Text of the comment to edit.
   */
  comment: string;
}

export interface FilesCommentsEditArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File containing the comment to edit.
   */
  file: string;

  /**
   * The comment to edit.
   */
  id: string;

  /**
   * Text of the comment to edit.
   */
  comment: string;
}
