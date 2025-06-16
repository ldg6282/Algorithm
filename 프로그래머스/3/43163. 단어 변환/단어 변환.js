function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let answer = 0;
  const visited = new Set();
  const queue = [[begin, 0]];

  function isOneLetterDiff(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
    }
    return diff === 1;
  }

  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();

    if (currentWord === target) {
      answer = step;
      break;
    }

    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];

      if (!visited.has(nextWord) && isOneLetterDiff(currentWord, nextWord)) {
        visited.add(nextWord);
        queue.push([nextWord, step + 1]);
      }
    }
  }

  return answer;
}