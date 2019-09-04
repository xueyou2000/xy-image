| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-image.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-image.svg?style=flat-square)

[![xy-image](https://nodei.co/npm/xy-image.png)](https://npmjs.org/package/xy-image)

# xy-image

图片组件

## 特性

-   [x] 错误图像显示
-   [x] 响应图片, 根据媒体查询显示不同的图片
-   [x] Placeholder 图片占位符

## 安装

```bash
# yarn
yarn add xy-image
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Image from "xy-image";
// 加载样式
import "xy-image/assets/index.css";
ReactDOM.render(<Image src="xx.png" />, container);
```

## API

| 属性          | 说明                                               | 类型                                                        | 默认值 |
| ------------- | -------------------------------------------------- | ----------------------------------------------------------- | ------ |
| querieConfigs | 媒体查询配置                                       | MediaQueryConfig[]                                          | 无     |
| stop          | 阻止加载图片, 可通过此属性自行封装实现延迟加载图片 | boolean                                                     | false  |
| loadNode      | 加载内容, 图片加载中时显示的内容                   | React.ReactNode                                             | 无     |
| failNode      | 错误内容, 图片加载失败时显示的内容                 | React.ReactNode                                             | 无     |
| src           | 图像路径                                           | string                                                      | 无     |
| alt           | 图片描述                                           | string                                                      | 无     |
| crossOrigin   | 跨域源                                             | "anonymous"/"use-credentials"                               | 无     |
| width         | 图片宽度                                           | number/string                                               | 无     |
| height        | 图片高度                                           | number/string                                               | 无     |
| onClick       | 点击事件                                           | (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void | 无     |
| onLoad        | 图片加载完毕                                       | () => void                                                  | 无     |
| onError       | 图片加载失败                                       | () => void                                                  | 无     |

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
