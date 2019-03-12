import React, { useState } from "react";
import { XyImage } from "../src";

export default function LoadSuccess() {
    return (
        <div>
            <XyImage src="http://www.w3school.com.cn/ui2017/bg.png" width={100} placeholder="加载中..." errorIamge="加载失败!" />
        </div>
    );
}
