function solution(n) {
    let answer = n + 1;
    const str1 = n.toString(2).replaceAll("0", "");
    let str2Length = 0;

    while (str1.length !== str2Length) {
        const str2 = answer.toString(2).replaceAll("0", "");
        str2Length = str2.length;
        answer++;
    }
    
    return answer - 1;
}