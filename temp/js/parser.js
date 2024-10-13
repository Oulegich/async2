"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = json;
function json(data) {
  return new Promise(function (resolve, reject) {
    // эмуляция обработки ArrayBuffer
    setTimeout(function () {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}