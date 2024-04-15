const IoRedis = require("ioredis");
const subscriber = new IoRedis();
subscriber.psubscribe("*Time");
console.log("Receiving started");
subscriber.on("pmessage", (pattern, channel, message) => {
        console.log(`received a message from ${channel}: ${message}`);
});
