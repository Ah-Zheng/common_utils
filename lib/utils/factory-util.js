"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awaitSleep = exports.toAsync = void 0;
/**
 * 將Promise物件重新包裝，回傳一個新的Promise，使其不管成功失敗都會回傳一個物件
 * 並利用物件的status來判斷結果
 * @param  {Promise} promiseObject Promise物件
 * @return {Promise} 重新包裝後的Promise，不管成功或失敗都會resolve一個物件
 */
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
/**
 * 異步等待
 * @param  {number} time 等待時間(ms)
 */
function awaitSleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
exports.awaitSleep = awaitSleep;
