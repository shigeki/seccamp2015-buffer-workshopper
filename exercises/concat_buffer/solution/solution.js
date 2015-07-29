var hex1 = process.argv[2];
var hex2 = process.argv[3];
var buf1 = new Buffer(hex1, 'hex');
var buf2 = new Buffer(hex2, 'hex');
var buf = Buffer.concat([buf1, buf2]);

console.log(buf.toString('base64'));
