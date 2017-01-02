export interface StaticEmojiListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: emoji:read
   */
  token: string;
}

export interface EmojiListArguments {
  /**
   * Authentication token.
   *
   * Requires scope: emoji:read
   */
  token?: string;
}
