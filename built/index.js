"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulitRedis = exports.RedisQueue = void 0;
const redisQueue_1 = require("./lib/redisQueue");
Object.defineProperty(exports, "RedisQueue", { enumerable: true, get: function () { return redisQueue_1.RedisQueue; } });
const mulitRedis_1 = require("./lib/mulitRedis");
Object.defineProperty(exports, "MulitRedis", { enumerable: true, get: function () { return mulitRedis_1.MulitRedis; } });
