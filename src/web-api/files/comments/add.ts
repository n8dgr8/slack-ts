export interface StaticFilesCommentsAddArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to add a comment to.
   */
  file: string;

  /**
   * Text of the comment to add.
   */
  comment: string;

  /**
   * Channel id (encoded) of which location to associate with the new comment.
   */
  channel?: string;
}

export interface FilesCommentsAddArguments {
  /**
   * Authentication token.
   *
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to add a comment to.
   */
  file: string;

  /**
   * Text of the comment to add.
   */
  comment: string;

  /**
   * Channel id (encoded) of which location to associate with the new comment.
   */
  channel?: string;
}
