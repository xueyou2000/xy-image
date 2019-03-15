import React, { useState } from "react";
import Image from "../src";
import squares from "./squares.svg";

export default function LoadFail() {
    const [stop, setStop] = useState(true);

    return (
        <div>
            <h1>图片加载失败</h1>
            <div>
                <button onClick={() => setStop(false)}>点击加载图片</button>
            </div>
            <br/>
            <Image src="no.png" stop={stop} loadNode={<img src={squares} />} failNode="加载失败!" />
        </div>
    );
}
