"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = read;
function read() {
  return new Promise(function (resolve, reject) {
    // эмуляция чтения файла
    setTimeout(function () {
      var data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return function (input) {
        var buffer = new ArrayBuffer(input.length * 2);
        var bufferView = new Uint16Array(buffer);
        for (var i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      }(data);
    }, 1000);
  });
}