
vue-async-component 异步远端组件

<p align="center">
  <a href="https://www.npmjs.com/package/vue-async-component"><img src="https://img.shields.io/npm/v/vue-async-component.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-async-component"><img src="https://img.shields.io/npm/l/vue-async-component.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-async-component"><img src="https://img.shields.io/npm/dm/vue-async-component.svg" alt="Downloads"></a>
</p>

---

用于 vue 项目中通过远程链接加载异步模块（异步模块不随项目一同打包）, **依赖 vue v2.4+**。

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| url     | 组件远程地址          |      string     |          —            |    —     |


### Installation

npm:

```
  npm i vue-async-component -S
```

基于Node.js的开发环境：

```
  import SyncComponent from 'vue-async-component';

  <sync-component
    url="http://localhost:8083/static/app.js">
  </sync-component>
```

浏览器环境：

```
  <script type="text/javascript" src="SyncComponent.min.js"></script>
  <script type="text/javascript">
    Vue.use(SyncComponent);
  </script>
```


> 注意：vue组件没有什么特别限制，唯独在webpack打包过程中需要注意引入项目是否包含当前组件中的依赖，如果有需要排除掉依赖，webpack 配置输出采用 `libraryTarget: "var"`，并且关闭 UglifyJsPlugin 的压缩功能 `compress: false`, vue-loader v13+ 需要配置 `options{ esModule: false }`。
