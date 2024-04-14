const IoRedis = require("ioredis");
const subscriber = new IoRedis();
subscriber.on("error", (error) => {
    console.error("Error occurred:", error);
});
subscriber.subscribe("PurchaseTime");
console.log("Receiving started");
subscriber.on("message", (channel, message) => {
    console.log(`Received a message from ${channel}: ${message}`);
});
