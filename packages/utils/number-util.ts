/**
 * 數字格式化 - 千分位加逗號
 * @param  {number|string} val
 * @returns number | string
 */
export function formatThousand(val: string | number) {
    if (Number.isNaN(+val)) return val;
    const number = `${val}`.split('.');
    return `${`${number[0]}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${number[1] ? `${number[1]}` : ''}`;
}

/**
 * 小數點後第二位
 * @param  {string|number} val
 * @returns number | string
 */
export function formatOdds(val: string | number) {
    if (Number.isNaN(+val)) return val;
    return (+val).toFixed(2);
}
