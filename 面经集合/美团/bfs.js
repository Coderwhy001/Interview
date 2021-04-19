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
  //     1
  //   2   3
  // 4  5    7
let result = [];
let stack = [root]; // 先将要遍历的树压入栈
let count = 0; // 用来记录执行到第一层
let bfs = function () {
  let node = stack[count];
  if (node) {
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    count++;
    bfs()
  }
  return result
}
let bfs2 = function (root) {
  let result = [];
  let stack = [root];
  let pointer = 0;
  while (pointer < stack.length) {
    let node = stack[pointer++];
    result.push(node.val)
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result
}
console.log(bfs2(root))