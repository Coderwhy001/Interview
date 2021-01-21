// 1、2、5面值的零钱无限个，凑出n有多少种方案？
function numsPlan (n) {
  let dp = new Array(n+1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  dp[4] = 5;
  dp[5] = 9;
  for (let i = 6; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 5]
  }
  return dp[n]
}


console.log(numsPlan(10))