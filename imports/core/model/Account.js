'use strict';

import * as Swap from './Swap';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        dynamic: async() => ({
            amount: 0,
        }),
        pair: 'USDJPY',
        lot: 10000,
        stopSize: 40,
        swap: Swap.DEFAULT,
    });