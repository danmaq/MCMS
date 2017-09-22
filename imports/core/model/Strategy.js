'use strict';

import * as Account from './Account';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        pair: 'USDJPY',
        step: 100,
        minTrends: 5,
        martingale: 2,
        lastIter: '1970-01-01 00:00:00',
        connection: async() => Account.DEFAULT,
    });