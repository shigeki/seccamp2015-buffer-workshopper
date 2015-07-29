var hex1 = process.argv[2];
var hex2 = process.argv[3];
var buf1 = Buffer(hex1, 'hex');
var buf2 = Buffer(hex2, 'hex');

buf2.copy(buf1, 2);
console.log(buf1.toString('hex'));
