'use strict';

import * as Exchange from '../enum/Exchange';
import * as Rate from './Rate';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        ordered: Rate.DEFAULT,
        quantity: 0,
        exchange: Exchange.BUY,
        takeProfit: Number.NaN,
        stopLoss: Number.NaN,
    });