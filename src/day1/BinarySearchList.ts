export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let r = haystack.length;

    while (l < r) {
        const m = Math.floor(l + (r - l) / 2);
        const v = haystack[m];
        if (v === needle) return true;
        else if (v < needle) l = m+1;
        else r = m;
    }
    return false;
}
