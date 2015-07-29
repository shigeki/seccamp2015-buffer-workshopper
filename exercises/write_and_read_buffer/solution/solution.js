var num = parseInt(process.argv[2]);
var buf = new Buffer(4);
buf.writeUInt32BE(num);
var out = buf.readUInt16BE(1);
console.log(out.toString(10));
