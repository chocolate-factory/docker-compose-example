console.log('start server');
var http = require("http");
var redis = require("redis");
var redisUrl = process.env.REDIS_URL;
console.log('start to connect redis: ' + redisUrl);
var client = redis.createClient({
    url: redisUrl
});
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    client.incr(req.url, function (error, value) {
        var viewCount = value;
        var response = { 'viewCount': viewCount };
        res.write(JSON.stringify(response));
        res.end();
    });
}).listen(8080);
