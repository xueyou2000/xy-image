# xy-image

---

> 基于`React Hooks` + `typescript`的基础组件, 只提供`es`模块

## 特性

-   [x] 错误图像显示
-   [x] 响应图片, 根据媒体查询显示不同的图片
-   [x] Placeholder 图片占位符

## 安装

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
