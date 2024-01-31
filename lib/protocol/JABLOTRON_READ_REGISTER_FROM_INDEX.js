var Helpers = require("../Helpers");
var Buff    = require("../Buffer");

exports.code = 0x43;

exports.buildRequest = function (read_category, read_index, read_page, read_quantity) {
	var buffer = Buff.alloc(9 + (values.length * 2));

	buffer.writeUInt8(read_category, 0);
	buffer.writeUInt8(read_index, 1);
	buffer.writeUInt8(read_page, 2);
	buffer.writeUInt8(read_quantity, 3);

	return buffer;
};

exports.parseRequest = function (buffer) {
	if (buffer.length < 4) return null;

	var data   = {
		read_category  : buffer.readUInt8(0),
		read_index  : buffer.readUInt8(1),
		read_page  : buffer.readUInt8(2),
		read_quantity : buffer.readUInt8(3),
	};

	return data;
};

exports.buildResponse = function (values) {
	var buffer = Buff.alloc(values.length * 2 + 1);

	buffer.writeUInt8(values.length * 2, 0);

	Helpers.copyBufferBlocks(buffer, values, 1);

	return buffer;
};

exports.parseResponse = function (buffer) {
	if (buffer.length === 0) return null;

	var blocks = buffer.readUInt8(0) / 2;
	var values = [];

	for (var i = 0; i < blocks; i++) {
		values.push(buffer.slice(1 + (i * 2), 3 + (i * 2)));
	}

	return { values: values };
};
