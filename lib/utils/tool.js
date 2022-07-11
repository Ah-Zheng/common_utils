"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAsync = void 0;
function toAsync(promiseObject) {
    return new Promise(resolve => {
        promiseObject.then(res => {
            return resolve({
                status: true,
                response: res
            });
        }).catch(err => {
            return resolve({
                status: false,
                error: err
            });
        });
    });
}
exports.toAsync = toAsync;
