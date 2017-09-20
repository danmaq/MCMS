'use strict';

import * as Account from './Account';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        pair: 'USDJPY',
        step: 100,
        minTrends: 5,
        martingale: 2,
        connection: async() => Account.DEFAULT,
    });