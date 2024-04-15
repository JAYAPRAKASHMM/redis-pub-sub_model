const IoRedis = require("ioredis");
const publisher = new IoRedis();
setInterval(() => {
    const random = Math.floor(Math.random() * 1000);
    let status=random%2==0?"bought":"sold";
    publisher.publish("PurchaseTime", `Order ${status} at ${(random%12)+1}:${random%61} by userId:1${random%100}`);
    console.log({ message: `Message published successfully `});
}, 2000);
