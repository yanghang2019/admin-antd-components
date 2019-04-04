export function checkDataType(data: object[]) {
	if (data !== null || data.length) {
		const type = Object.prototype.toString.call(data);
		console.log(type);
		if (type !== "[object Array]") {
			throw Error("data type is not object");
			//console.log("data type is not Array");
		}
	}
}