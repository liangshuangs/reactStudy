## react 源码学习

### 启动一个demo

- create-react-app react-study
- cd react-study
- npm install
- npm run eject

### 如何调试源码
![https://juejin.cn/post/7100212277911453733] 调试源码教程

### 源码分析
```
const root = ReactDOM.createRoot(document.getElementById('root'));
```
会进到 react/packages/react-dom/client.js 文件中
```
createRoot(container, options) {
    if (__DEV__) {
    Internals.usingClientEntryPoint = true;
  }
  try {
    return createRootImpl(container, options);
  } finally {
    if (__DEV__) {
      Internals.usingClientEntryPoint = false;
    }
  }
}
```
走到if(__DEV__)里面，把Internals.usingClientEntryPoint设置为true;

