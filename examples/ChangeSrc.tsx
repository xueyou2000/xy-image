import React, { useState } from "react";
import { XyImage } from "../src";
import squares from "./squares.svg";

export default function ChangeSrc() {
    const [src, setSrc] = useState("xx");

    function toggle() {
        setSrc(src === "xx" ? "http://www.w3school.com.cn/ui2017/bg.png" : "xx");
    }

    return (
        <div>
            <XyImage
                src={src}
                width={100}
                placeholder={<img src={squares} />}
                errorIamge={
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551704319746&di=b7276a9504d64001deac565f0f9be60c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F82%2F88573c6372e4ae5.jpg" />
                }
            />

            <button onClick={toggle}>切换</button>
        </div>
    );
}
