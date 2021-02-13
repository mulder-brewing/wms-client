const prefix = type => `AUTH.${type}`;

export const AUTH_CHECK_END = prefix('AUTH_CHECK_END');
export const EMAIL_VALID = prefix('EMAIL_VALID');
export const SIGN_IN = prefix('SIGN_IN');
export const SIGN_OUT = prefix('SIGN_OUT');
export const SIGN_UP = prefix('SIGN_UP');