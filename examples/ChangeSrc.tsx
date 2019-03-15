import React, { useState } from "react";
import Image from "../src";
import squares from "./squares.svg";

export default function ChangeSrc() {
    const [src, setSrc] = useState("xx");

    function toggle() {
        setSrc(src === "xx" ? "http://www.w3school.com.cn/ui2017/bg.png" : "xx");
    }

    return (
        <div>
            <h1>改变图片src</h1>
            <div>
                <button onClick={toggle}>切换</button>
            </div>
            <br/>
            <Image
                width="500"
                src={src}
                loadNode={<img src={squares} />}
                failNode="加载失败"
            />
        </div>
    );
}
