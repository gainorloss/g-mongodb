/**
 * mongodb.cs: mongodb helper
 *    creator: gainorloss
 * createTime: 2019-07-30
 */
const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;
const EventEmitter = require('events').EventEmitter;

const conf=require('./mongodb.conf');//导入自定义连接配置

class Mongodb {
    constructor(conf) {
        this.conf = conf;
        this.client = new MongoClient(conf.url, { useNewUrlParser: true });
        this.emitter = new EventEmitter();//事件发送器
        this.client.connect(err => {
            if (err) {
                throw err;
            }
            console.log('连接成功');
            this.emitter.emit('connect');
        });
    }
    once(event, cb) {
        this.emitter.once(event, () => cb())
    }
    col(colName, dbName = this.conf.dbName) {
        return this.client.db(dbName).collection(colName);
    }
}
module.exports =new Mongodb(conf);