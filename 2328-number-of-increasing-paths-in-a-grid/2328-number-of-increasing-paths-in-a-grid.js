const countPaths = (grid) => {
  const m = grid.length,
    n = grid[0].length;
  const mod = 10 ** 9 + 7,
    memo = {};
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dp = (r, c) => {
    let key = `${r},${c}`;
    if (key in memo) return memo[key];

    let ans = 1;
    for (let [dr, dc] of dirs) {
      let newR = r + dr,
        newC = c + dc;
      if (
        0 <= newR &&
        newR < m &&
        0 <= newC &&
        newC < n &&
        grid[newR][newC] > grid[r][c]
      ) {
        ans += dp(newR, newC) % mod;
      }
    }
    return (memo[key] = ans % mod);
  };

  let numberOfPaths = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      numberOfPaths += dp(r, c) % mod;
    }
  }
  return numberOfPaths % mod;
};
