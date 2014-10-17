!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.randuint32s=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// provide N * 32 bits randomness as an array of 32-bit integers
module.exports = function(N) {
    var i, ts, ui32a, uint32s;

    // default N to 4:
    if (N == null) N = 4;

    if (window.crypto && crypto.getRandomValues && window.Uint32Array) {
        try {
            ui32a = new Uint32Array(N);
            crypto.getRandomValues(ui32a);
            uint32s = Array.prototype.concat.apply([], ui32a);
        } catch (err) {
            // do nothing; it's ok for this to fail, leaving uint32s undefined
        }
    }

    if (!uint32s) {
        uint32s = new Array(N);
        ts = 0;
        for (i = N - 1; i >= 0; i--) {
            uint32s[i] = Math.floor(Math.random() * 0x100000000);

            // Leo (@pitecus) says we've seen collisions from poorly-seeded browser PRNG's
            // in the wild, so for more entropy, let's munge in our timestamp:
            if (!ts) ts = +(new Date);
            uint32s[i] = (uint32s[i] ^ (ts % 0x100000000)) >>> 0;
            ts = Math.floor(ts / 0x100000000);
        }
    }

    return uint32s;
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyYW5kdWludDMycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIHByb3ZpZGUgTiAqIDMyIGJpdHMgcmFuZG9tbmVzcyBhcyBhbiBhcnJheSBvZiAzMi1iaXQgaW50ZWdlcnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTikge1xuICAgIHZhciBpLCB0cywgdWkzMmEsIHVpbnQzMnM7XG5cbiAgICAvLyBkZWZhdWx0IE4gdG8gNDpcbiAgICBpZiAoTiA9PSBudWxsKSBOID0gNDtcblxuICAgIGlmICh3aW5kb3cuY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgd2luZG93LlVpbnQzMkFycmF5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1aTMyYSA9IG5ldyBVaW50MzJBcnJheShOKTtcbiAgICAgICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModWkzMmEpO1xuICAgICAgICAgICAgdWludDMycyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHVpMzJhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nOyBpdCdzIG9rIGZvciB0aGlzIHRvIGZhaWwsIGxlYXZpbmcgdWludDMycyB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdWludDMycykge1xuICAgICAgICB1aW50MzJzID0gbmV3IEFycmF5KE4pO1xuICAgICAgICB0cyA9IDA7XG4gICAgICAgIGZvciAoaSA9IE4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdWludDMyc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwKTtcblxuICAgICAgICAgICAgLy8gTGVvIChAcGl0ZWN1cykgc2F5cyB3ZSd2ZSBzZWVuIGNvbGxpc2lvbnMgZnJvbSBwb29ybHktc2VlZGVkIGJyb3dzZXIgUFJORydzXG4gICAgICAgICAgICAvLyBpbiB0aGUgd2lsZCwgc28gZm9yIG1vcmUgZW50cm9weSwgbGV0J3MgbXVuZ2UgaW4gb3VyIHRpbWVzdGFtcDpcbiAgICAgICAgICAgIGlmICghdHMpIHRzID0gKyhuZXcgRGF0ZSk7XG4gICAgICAgICAgICB1aW50MzJzW2ldID0gKHVpbnQzMnNbaV0gXiAodHMgJSAweDEwMDAwMDAwMCkpID4+PiAwO1xuICAgICAgICAgICAgdHMgPSBNYXRoLmZsb29yKHRzIC8gMHgxMDAwMDAwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVpbnQzMnM7XG59O1xuIl19
