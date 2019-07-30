const mongodb = require('./g-mongodb');
mongodb.once('connect', async () => {
    await mongodb.col('fruits').insertMany([{ name: "香蕉", price: 30 },
    { name: "苹果", price: 30 },
    { name: "橘子", price: 30 },
    { name: "香蕉", price: 30, stock: 1000 },
    { name: "苹果", price: 30, stock: 1000 },
    { name: "橘子", price: 30, stock: 1000 }]);
})