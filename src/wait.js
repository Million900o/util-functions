function wait(a) { return new Promise(r => { setTimeout(() => r(), a); }); }

module.exports = wait;
