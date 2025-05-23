function solution(players, callings) {
    const indexMap = new Map();
    players.forEach((player, i) => {
        indexMap.set(player, i);
    });

    for (const call of callings) {
        const idx = indexMap.get(call);
        const prevPlayer = players[idx - 1];

        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

        indexMap.set(call, idx - 1);
        indexMap.set(prevPlayer, idx);
    }

    return players;
}