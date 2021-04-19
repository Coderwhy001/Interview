let _deps;

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const hasChangedDeps = _deps ? !depArray.every((el, i) => el === _deps[i]) : true
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray
  }
}