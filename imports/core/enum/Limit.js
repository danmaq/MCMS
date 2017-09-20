'use strict';

/** No limit. */
export const NONE = 0;

/** Take profit limit. */
export const STOP = 1;

/** Stop loss limit. */
export const LIMIT = -1;

/** to String. */
export const toString =
    (limit = NONE) =>
    limit === STOP ? 'Stop' :
    limit === LIMIT ? 'Limit' :
    '';