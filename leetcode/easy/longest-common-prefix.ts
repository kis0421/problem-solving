function longestCommonPrefix(strs: string[]): string {
    const sortedStrs = strs.sort((a, b) => a.length - b.length);
    const standard = sortedStrs[0];

    for (let i = 1; i <= standard.length; i++) {
        if (!sortedStrs.every((str) => str.startsWith(standard.slice(0, i)))) {
            return standard.slice(0, i - 1);
        }
    }
    return standard
}
