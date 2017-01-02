export interface StaticUsersDeletePhotoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users. profile:write
   */
  token: string;
}

export interface UsersDeletePhotoArguments {
  /**
   * Authentication token.
   *
   * Requires scope: users. profile:write
   */
  token?: string;
}
