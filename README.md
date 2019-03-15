# xy-image

---

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-image.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-image
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-image.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-image

> 基于`React Hooks` + `typescript`的基础组件, 只提供`es`模块

## 特性

-   [x] 错误图像显示
-   [x] 响应图片, 根据媒体查询显示不同的图片
-   [x] Placeholder 图片占位符

## 安装

[![xy-image](https://nodei.co/npm/xy-image.png)](https://npmjs.org/package/xy-image)

|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|
| --- | --- | --- | --- | --- |
| IE 11+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

```sh
# npm
npm install --save xy-image classNames utils-hooks

# yarn
yarn add xy-image classNames utils-hooks
```

## 使用

```ts
import React from "react";
import ReactDOM from "react-dom";
import Image from "xy-image";
// 加载可选样式
import "xy-image/assets/index.css";
ReactDOM.render(<Image src="xx.png" />, container);
```

**MediaQueryConfig**

```ts
export interface MediaQueryConfig {
    /**
     * 媒体查询
     * (min-width: 1500px) 字符串 或 1500 数值
     */
    querie: string | number;
    /**
     * 对应查询显示图片路径
     */
    src: string;
}
```

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-image is released under the MIT license.
