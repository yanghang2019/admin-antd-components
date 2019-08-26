// 数组去重
export function deduplication(data: string[] = []): string[] {
	return Array.from(new Set(data));
}

// import Message from "ezUI/Message";

// import { errorInfo } from "utils/constant";

// export default function e<T>(fn: (...args: any) => Promise<T>, showErrorAlert: boolean = true) {
// 	return function wrapped(..._args: any): Promise<[Error | null, T]> {
// 		return (fn.apply(this, arguments) as Promise<T>).then(
// 			(res: T) => {
// 				return [null, res] as [null, T];
// 			},
// 			(err: Error) => {
// 				console.error(err);
// 				if (showErrorAlert) {
// 					Message.alert(errorInfo);
// 				}
// 				return [err, {}] as [Error, T];
// 			}
// 		);
// 	};
// }


//  以a链接的形式下载txt的数据
export function download(filename, data) {
	let element = document.createElement("a");
	element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
	element.setAttribute("download", filename);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

// base64转为为到blob二进制
function dataURItoBlob(dataURI, mimeString) {
	if (!mimeString) {
		mimeString = dataURI
			.split(",")[0]
			.split(":")[1]
			.split(";")[0]; // mime类型
		dataURI = dataURI.split(",")[1];
	}
	let byteString = atob(dataURI); // base64 解码
	let arrayBuffer = new ArrayBuffer(byteString.length); // 创建缓冲数组
	let intArray = new Uint8Array(arrayBuffer); // 创建视图
	for (let i = 0; i < byteString.length; i++) {
		intArray[i] = byteString.charCodeAt(i);
	}
	return new Blob([intArray], { type: mimeString });
}

function downloadURL(url: string, name: string = "") {
	const link = document.createElement("a");
	link.download = name;
	link.href = url;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export function downloadExcel(data: Blob, filename): void {
	const url = URL.createObjectURL(
		dataURItoBlob(data, "application/octet-stream")
	);
	downloadURL(url, filename);
	// 手动标记用于内存回收，防止内存泄漏
	URL.revokeObjectURL(url);
}

//导出excel文件
// const ExportJsonExcel = require("js-export-excel");
// // 导出table数据为excel
// export function importExcel(data: any, header: string[], filter: string[]) {
// 	let option = {} as any;
// 	option.fileName = "goods";
// 	option.datas = [
// 		{
// 			sheetData: data,
// 			sheetName: "sheet",
// 			sheetFilter: filter,
// 			sheetHeader: header
// 		}
// 	];

// 	let toExcel = new ExportJsonExcel(option); // new
// 	toExcel.saveExcel(); // 保存
// }

// 操作localstorage
export function setLocalStorage(key: string, value: string) {
	localStorage.setItem(key, value);
}

export function getLocalStorageByKey(key: string) {
	return localStorage.getItem(key) || null;
}

export function removeLocalStorageByKey(key: string) {
	localStorage.removeItem(key);
}

// 格式化日期
import * as moment from "moment";

export const ALL = "YYYY-MM-DD HH:mm:ss";
export const Y_M_D = "YYYY-MM-DD";

export function formatTimeByTimeStamp(timeStamp: number, format: string) {
	return moment(timeStamp).format(format);
}


export function formatUnixTime(t: number | string, format: string = "YYYY-MM-DD HH:mm:ss"): string {
	return moment.unix(Number(t)).format(format);
}


// 遍历

// function getBtnByHref(menuInfos: MenuInfos[], href: string): Elements[] {
// 	let element;
// 	if (menuInfos) {
// 		for (let i = 0; i < menuInfos.length; i++) {
// 			const { elements, url, subMenus } = menuInfos[i];
// 			let lowerUrl = url.toLocaleLowerCase();
// 			let hrefName = href.toLocaleLowerCase();
// 			if (hrefName.includes(lowerUrl)) {
// 				return elements;
// 			} else {
// 				if (subMenus.length) {
// 					if (getBtnByHref(subMenus, href)) {
// 						return getBtnByHref(subMenus, href);
// 					} else {
// 						element = getBtnByHref(subMenus, href);
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return element;
// }


/** @format */

// import { Modal } from "antd";

// export function handleServiceMethodError(
// 	target: any,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	const func = descriptor.value;
// 	return {
// 		get() {
// 			return (...args: any[]) => {
// 				return Promise.resolve(func.apply(this, args)).catch(e => {
// 					if (e.status > 400) {
// 						Modal.error({
// 							title: "网络错误"
// 						});
// 					} else {
// 						Modal.error({
// 							title: e.message
// 						});
// 					}
// 				});
// 			};
// 		},
// 		set(newValue: any) {
// 			return newValue;
// 		}
// 	};
// }

// export function handleServiceClassError(target: any) {
// 	Object.getOwnPropertyNames(target.prototype).forEach(key => {
// 		const func = target.prototype[key];
// 		target.prototype[key] = (...args: any[]) => {
// 			Promise.resolve(func.apply(this, args)).catch(e => {
// 				if (e.status > 400) {
// 					Modal.error({
// 						title: "网络错误"
// 					});
// 				} else {
// 					Modal.error({
// 						title: e.message
// 					});
// 				}
// 			});
// 		};
// 	});
// 	return target;
// }


// export function getPreviewUrlByPath(path: string, countryCode: string = "4500000") {
// 	// 支持 WEB
// 	const domain = WebDomains[countryCode.toUpperCase()] || WebDomains.SG;
// 	let TrimPath = path.trim();
// 	const hashIndex = TrimPath.lastIndexOf("#");
// 	const hash = TrimPath.substring(hashIndex);

// 	if (TrimPath.indexOf("?") > -1) {
// 		TrimPath += "&isPreview=true";
// 	} else {
// 		TrimPath += "?isPreview=true";
// 	}

// 	if (hashIndex > -1) {
// 		TrimPath = TrimPath.replace(hash, "") + hash;
// 	}

// 	if (/^(https?|\/\/)/i.test(TrimPath)) {
// 		return TrimPath;
// 	} else {
// 		return `${location.protocol}//${domain}${TrimPath}`;
// 	}
// }

// function hasEncode(str: string): boolean {
// 	const preStr = str;
// 	try {
// 		str = decodeURIComponent(str);
// 	} catch (err) {
// 		str = preStr;
// 	}
// 	return preStr !== str;
// }

// function newEncodeURIComponent(str: string, isEncodeURIComponent = true): string {
// 	return hasEncode(str) ? str : isEncodeURIComponent ? encodeURIComponent(str) : encodeURI(str);
// }

// function replaceSearchKeyValue(keyValueString: string): string {
// 	return keyValueString.replace(/([^=]+)(=)(.+)/, (match, p1, p2, p3) => {
// 		return `${newEncodeURIComponent(p1, false)}${p2}${newEncodeURIComponent(p3)}`;
// 	});
// }

// export function transferToEncodedURL(link: string): string {
// 	let linkUrl = null;
// 	try {
// 		linkUrl = new URL(link);
// 	} catch (e) {
// 		console.error(e);
// 		return null;
// 	}
// 	let { search, pathname } = linkUrl;

// 	if (pathname) {
// 		linkUrl.pathname = newEncodeURIComponent(pathname, false);
// 	}
// 	if (search) {
// 		const splitStr: string = "&";
// 		const searchString: string = search.substring(1);
// 		const searchStringItems: string[] = searchString.split(splitStr);
// 		linkUrl.search = searchStringItems.reduce((preValue, cValue, index) => {
// 			const connection = index === searchStringItems.length - 1 ? "" : splitStr;
// 			return preValue + replaceSearchKeyValue(cValue) + connection;
// 		}, "?");
// 	}
// 	return linkUrl.href;
// }

// export function getSiteDomain(): string {
// 	const domain = window.location.hostname.split(".");
// 	if (domain.includes("65daigou")) {
// 		return "http://ezbuy.sg";
// 	} else if (domain.includes("pk") || domain.includes("pkadmin")) {
// 		return "http://pk.ezbuy.com";
// 	} else if (domain.includes("pkadmin4")) {
// 		return "http://pk4.65emall.net";
// 	} else {
// 		return "http://sg2.65emall.net";
// 	}
// }
