function quick(arr, left = 0, right = arr.length - 1) {
	var list = [[left, right]]; // 模拟栈
	while(list.length > 0) {
		var now = list.pop()
		if (now[0] >= now[1]) continue;
		var i = now[0], j = now[1], flag = i;
		while(i < j) {
			while(arr[j] >= arr[flag] && j > flag) j --;
			if (i >= j) break;
			while(arr[i] <= arr[flag] && i < j) i ++;
			var temp = arr[flag];
			arr[flag] = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
			flag = i	
		}
		list.push([now[0], flag - 1]);
		list.push([flag + 1, now[1]]);
	}
  return arr;
}

console.log(quickSort([5,1,2,4,3]));
console.log(quick([5,1,2,4,3]));