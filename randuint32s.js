/* jshint browserify:true */
/* global crypto */

'use strict';

// provide N * 32 bits randomness as an array of 32-bit integers
module.exports = function(N) {
    var i, ts, ui32a, uint32s;

    // // default N to 4:
    // if (N == null) N = 4;

    try {
        ui32a = new Uint32Array(N);
        crypto.getRandomValues(ui32a);
        uint32s = Array.prototype.concat.apply([], ui32a);
    } catch (err) { } // it's ok for this to fail, leaving uint32s undefined

    if (!uint32s) {
        uint32s = new Array(N);
        ts = 0;
        for (i = N - 1; i >= 0; i--) {
            uint32s[i] = Math.floor(Math.random() * 0x100000000);

            // Leo (@pitecus) says we've seen collisions from poorly-seeded browser PRNG's
            // in the wild, so for more entropy, let's munge in our timestamp:
            if (!ts) ts = (+new Date());
            uint32s[i] = (uint32s[i] ^ (ts % 0x100000000)) >>> 0;
            ts = Math.floor(ts / 0x100000000);
        }
    }

    return uint32s;
};
