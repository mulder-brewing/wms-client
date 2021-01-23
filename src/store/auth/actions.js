import * as types from './types';

export const signed_in = (token, expiration) => ({
    token,
    expiration,
    type: types.SIGNED_IN
});

