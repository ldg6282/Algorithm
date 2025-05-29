function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= total; height++) {
        const width = total / height;

        if (width >= height) {
            const innerWidth = width - 2;
            const innerHeight = height - 2;

            if (innerWidth * innerHeight === yellow) {
                return [width, height];
            }
        }
    }
}