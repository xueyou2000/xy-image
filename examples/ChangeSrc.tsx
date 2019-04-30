import React, { useState } from "react";
import Image from "../src";
import "../src/assets/index";
import squares from "./squares.svg";

export default function ChangeSrc() {
    const [src, setSrc] = useState("https://inews.gtimg.com/newsapp_ls/0/8206128013_294195/0");

    function toggle() {
        setSrc(src === "https://inews.gtimg.com/newsapp_ls/0/8206128013_294195/0" ? "http://www.w3school.com.cn/ui2017/bg.png" : "https://inews.gtimg.com/newsapp_ls/0/8206128013_294195/0");
    }

    return (
        <div>
            <button onClick={toggle}>切换</button>
            <br />
            <Image width="100%" src={src} loadNode={<img src={squares} />} failNode="加载失败" />
        </div>
    );
}
