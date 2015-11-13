var assert = require("assert");
var Help   = require("../help");

describe("Read Coils", function () {
	it("should be [ start, end ] => [ bit, bit, .. ]", function () {
		for (var i = 0; i < Help.trials; i++) {
			var start = Math.round(Math.random() * 100);
			var end   = start + Math.round(Math.random() * 100);
			var buf1  = Help.modbus.readCoils.request(start, end);
			var buf2  = Help.startEndAddress(Help.modbus.readCoils.code, start, end);
			var bits  = Help.randomBitList(end - start + 1);
			var buf3  = Help.modbus.readCoils.response(bits);

			assert.deepEqual(buf1, buf2);
			assert.deepEqual(bits, Help.modbus.readCoils.parse(buf3.slice(1)));
		}
	});
});
