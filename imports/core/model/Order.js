'use strict';

import * as Exchange from '../enum/Exchange';
import * as Rate from './Rate';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        exchange: Exchange.BUY,
        price: Number.NaN,
        quantity: 0,
        takeProfit: Number.NaN,
        stopLoss: Number.NaN,
    });