## react 源码学习

### 启动一个demo

- create-react-app react-study
- cd react-study
- npm install
- npm run eject

### 如何调试源码
https://juejin.cn/post/7100212277911453733 调试源码教程

### 源码分析
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
会进到 react/packages/react-dom/client.js 文件中
```
    function createRoot(container, options) {
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
走到if(__DEV__)里面，把Internals.usingClientEntryPoint设置为true;接着执行createRootImpl(container, options); 接着执行createRootImpl就是createRoot方法，在react/packages/react-dom/src/client/ReactDOMRoot.js中定义了该方法。
```
function createRoot(container, options) {
    const root = createContainer(
        container,
        ConcurrentRoot,
        null,
        isStrictMode,
        concurrentUpdatesByDefaultOverride,
        identifierPrefix,
        onRecoverableError,
        transitionCallbacks,
    );
    markContainerAsRoot(root.current, container);
    const rootContainerElement = 
        container.nodeType === COMMENT_NODE
        ? (container.parentNode: any)
        : container;
    listenToAllSupportedEvents(rootContainerElement);
    return new ReactDOMRoot(root);
}
```
所以最后 const root = ReactDOM.createRoot(document.getElementById('root')); 得到的是new ReactDOMRoot(root);的实例，

ReactDOMRoot类上有个一个render的方法，
```
ReactDOMRoot.prototype.render = function (children) {
    const root = this._internalRoot;
    const container = root.containerInfo;
    updateContainer(children, root, null, null);
}
```
root.render(<React.StrictMode><App /></React.StrictMode>)就是调用ReactDOMRoot.prototype.render这个方法，最后执行的是updateContainer方法

