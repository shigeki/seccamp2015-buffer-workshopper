var hex1 = process.argv[2];
var buf = Buffer(hex1, 'hex');
console.log(buf.slice(16, 22).toString('base64'));
