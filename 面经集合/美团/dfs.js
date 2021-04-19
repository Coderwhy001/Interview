// 非递归
function dfs(root) {
  let stack = [];
  let result = []
  stack.push(root);
  while(stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left)
  }
  return result
}
// 递归
function dfs2(root) {
  if (!root) return;
  console.log(root.val)
  dfs2(root.left)
  dfs2(root.right)
}

const root = {
  val: 6,
  left: {
      val: 8,
      left: {
          val: 4,
          left: null,
          right: null,
      },
      right: {
          val: 2,
          left: null,
          right: null
      }
  },
  right: {
      val: 5,
      right: {
          val: 9,
          left: null,
          right: null
      },
      left: null
  }
}
console.log(dfs2(root))