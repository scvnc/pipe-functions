'use strict';

const pipe = (...fns) => fns.reduce((v, f) => v.constructor === Function ? v() : v.then ? v.then(v => f(v)) : f(v));
module.exports = pipe;