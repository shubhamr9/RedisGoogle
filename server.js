
var redis = require ('redis');
var port = '6379';
var host = '104.196.39.205'; 
var client = redis.createClient(port, host);
var password = 'yourpassword';
client.auth(password);


client.on('connect', function()
{
	console.log("Connected");
});

client.set('framework', 'AngularJS');

client.get('framework', function(err,reply)
{
	console.log(reply);
});

client.hmset('frameworks1', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
});

client.hgetall('frameworks1', function(err, object) {
    console.log(object);
});

client.lpush(['frameworks3', 'angularjs', 'backbone'], function(err, reply) {
    console.log(reply); //prints 2
});

client.lrange('frameworks3', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});

client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply) {
    console.log(reply); // 3
});

client.smembers('tags', function(err, reply) {
    console.log(reply);
});

client.exists('frameworks1', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});
