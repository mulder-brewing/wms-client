import * as types from './types';

export const signed_in = user => ({
    user,
    type: types.SIGNED_IN
});

