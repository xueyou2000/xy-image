import React from "react";
import Image from "../src";
import squares from "./squares.svg";

export default function MediaQuery() {
    const q = [
        {
            querie: "(min-width: 1500px)",
            src: "https://source.unsplash.com/lxuB4abGzXc/800x1000"
        },
        {
            querie: "(min-width: 1000px)",
            src: "https://source.unsplash.com/d30sszrW7Vw/800x800"
        },
        {
            querie: "(min-width: 600px)",
            src: "https://source.unsplash.com/mDuluxr50Ew/800x500"
        }
    ];

    return (
        <div>
            <p>窗口宽度1500, 1000, 600 时各有不同图片</p>
            <Image width="100%" height="200px" src={q[0].src} querieConfigs={q} loadNode={<img src={squares} />} failNode="加载失败" />
        </div>
    );
}
