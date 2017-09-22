'use strict';

/** Order operation type. */
export const ORDER = 0;

/** Order operation type. */
export const CANCEL = 1;

/** Order operation type. */
export const CLOSE = 2;

/** Order operation type. */
export const MODIFY = 3;

/** to String. */
export const toString =
    (op = ORDER) =>
    op === ORDER ? 'Order' :
    op === CANCEL ? 'Cancel' :
    op === CLOSE ? 'Close' :
    op === MODIFY ? 'Modify' :
    '';