// Will be called once and stored in the cache
console.log("Hello from the module");

// Will be called as many times as required by the file that imports it. See modules.js
module.exports = () => console.log("Log this beautiful text 💋");