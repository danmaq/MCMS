'use strict';

import * as Exchange from '../enum/Exchange';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        tick: '1970-01-01 00:00:00',
        ask: Number.NaN,
        bid: Number.NaN,
    });

/** Get order price by exchange type. */
export const ordered =
    ({
        src = DEFAULT,
        exchange = Exchange.BUY
    }) =>
    exchange === Exchange.BUY ? src.ask : src.bid;

/** Get stop price by exchange type. */
export const stoped =
    ({
        src = DEFAULT,
        exchange = Exchange.BUY
    }) =>
    exchange === Exchange.BUY ? src.bid : src.ask;