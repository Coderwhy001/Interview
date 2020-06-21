VDOM和真实DOM的区别和优化:
1. 虚拟DOM不会立马进行排版与重回操作
2. 虚拟DOM进行频繁修改， 然后一次性比较并修改真实DOM中需要改的部分,最后在真实DOM中进行排版与重绘， 减少过多DOM节点排版与重绘损耗
3. 虚拟DOM有效降低大面积真实DOM的重绘与排版， 因为最终与真实DOM比较差异， 可以只渲染局部

# diff算法
- 新的DOM节点不存在{type: 'REMOVE', index}
- 文本的变化{type: 'TEXT', text: 1}
- 当节点类型相同时，去看一下属性是否相同，产生一个属性的补丁包{type: 'ATTR', attr: {class: 'list-group'}}
- 节点类型不相同，直接采用替换模式{type: 'REPLACE', newNode}
walk方法都做了什么？
- 每个元素都有一个补丁，所以需要创建一个放当前补丁的数组
- 如果没有new节点的话，就直接将type为REMOVE的类型放到当前补丁里
```
    if (!newNode) {
        current.push({ type: 'REMOVE', index });
    }
```
- 如果新老节点是文本的话，判断一下文本是否一致，再指定类型TEXT并把新节点放到当前补丁
```
    else if (isString(oldNode) && isString(newNode)) {
        if (oldNode !== newNode) {
            current.push({ type: 'TEXT', text: newNode });
        }
    }
```
- 如果新老节点的类型相同，那么就来比较一下他们的属性props
- 属性比较

  - diffAttr

    - 去比较新老Attr是否相同
    - 把newAttr的键值对赋给patch对象上并返回此对象

- 然后如果有子节点的话就再比较一下子节点的不同，再调一次walk

  - diffChildren

    - 遍历oldChildren，然后递归调用walk再通过child和newChildren[index]去diff

```
    else if (oldNode.type === newNode.type) {
        // 比较属性是否有更改
        let attr = diffAttr(oldNode.props, newNode.props);
        if (Object.keys(attr).length > 0) {
            current.push({ type: 'ATTR', attr });
        }
        
        // 如果有子节点，遍历子节点
        diffChildren(oldNode.children, newNode.children, patches);
    }

```
- 上面三个如果都没有发生的话，那就表示节点单纯的被替换了，type为REPLACE，直接用newNode替换即可
```
    else {
        current.push({ type: 'REPLACE', newNode});
    }

```
- 当前补丁里确实有值的情况，就将对应的补丁放进大补丁包里
```
    if (current.length > 0) {
        // 将元素和补丁对应起来，放到大补丁包中
        patches[index] = current;
    }
```