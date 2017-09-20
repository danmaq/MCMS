'use strict';

/** Buy exchange. */
export const BUY = 1;

/** Sell exchange. */
export const SELL = -1;

/** to String. */
export const toString =
    (exchange = BUY) =>
    exchange === BUY ? 'Buy' :
    exchange === SELL ? 'Sell' :
    '';