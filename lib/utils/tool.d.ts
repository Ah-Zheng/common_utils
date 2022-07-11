declare function toAsync<T>(promiseObject: Promise<T>): Promise<{
    status: boolean;
    response?: T;
    error?: any;
}>;
export { toAsync };
