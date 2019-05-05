import React, { useState } from "react";
import Image from "../src";
import squares from "./squares.svg";

export default function LoadSuccess() {
    const [stop, setStop] = useState(true);

    return (
        <div>
            <button onClick={() => setStop(false)}>点击加载图片</button>
            <br />
            <Image width="100%" src="http://www.w3school.com.cn/ui2017/bg.png" stop={stop} loadNode={<img src={squares} />} failNode="加载失败!" />
        </div>
    );
}
