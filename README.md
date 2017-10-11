# vue-async-component 异步远端组件

用于 vue 项目中通过远程链接加载异步模块（异步模块不随项目一同打包）, 依赖 vue v2.4+。

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| url     | 组件远程地址          |      string     |          —            |    —     |


### 引入：

```
  import SyncComponent from 'vue-async-component';

  // vue 中调用组件
  <sync-component
    url="http://localhost:8083/static/app.js">
  </sync-component>
```

### 注意事项

> 注意：vue组件没有什么特别限制，唯独在webpack打包过程中需要注意引入项目是否包含当前组件中的依赖，如果有需要排除掉依赖，webpack 配置输出采用 `libraryTarget: "var"`，并且关闭 UglifyJsPlugin 的压缩功能 `compress: false`, vue-loader v13+ 需要配置 `options{ esModule: false }`。
