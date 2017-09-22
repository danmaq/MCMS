'use strict';

import * as Exchange from '../enum/Exchange';

/** Default template. */
export const DEFAULT =
    Object.freeze({
        long: 0,
        short: 0,
    });

/** Get swap point. */
export const point =
    ({
        src = DEFAULT,
        exchange = Exchange.BUY
    }) =>
    exchange === Exchange.BUY ? src.long : src.short;