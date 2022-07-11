function toAsync<T>(promiseObject: Promise<T>): Promise<{
    status: boolean;
    response?: T,
    error?: any
}> {
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
            })
        });
    });
}

export {
    toAsync
};