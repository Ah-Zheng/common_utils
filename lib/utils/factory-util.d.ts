/**
 * 將Promise物件重新包裝，回傳一個新的Promise，使其不管成功失敗都會回傳一個物件
 * 並利用物件的status來判斷結果
 * @param  {Promise} promiseObject Promise物件
 * @return {Promise} 重新包裝後的Promise，不管成功或失敗都會resolve一個物件
 */
export declare function toAsync<T>(promiseObject: Promise<T>): Promise<{
    status: boolean;
    response?: T;
    error?: any;
}>;
/**
 * 異步等待
 * @param  {number} time 等待時間(ms)
 */
export declare function awaitSleep(time: number): Promise<void>;
