const log = require('loglevel');
log.setLevel(log.levels.DEBUG);

console.log('log level:', log.getLevel()); // outputs 1, i.e. DEBUG
log.warn('always displayed; now for the debug'); // does output as expected
log.debug('hello?'); // no output!!