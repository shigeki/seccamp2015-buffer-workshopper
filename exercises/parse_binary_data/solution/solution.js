var hex = '70188c850a1314140a48656c6c6f20485454502f3220576f726c6421';
var buf = new Buffer(hex, 'hex');
var payloadLength = buf.slice(0, 2).readUInt16BE(0) & 0x01ff;
var padLength = buf.slice(3, 4).readUInt8(0) & 0x7f;
var payload = buf.slice(5, 5 + payloadLength);
var value = payload.slice(padLength - 1);
console.log(value.toString('ascii'));
