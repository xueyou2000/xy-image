import React, { useState } from "react";
import { XyImage } from "../src";

export default function LoadFail() {
    return (
        <div>
            <XyImage src="xxx.png" width={100} placeholder="加载中..." errorIamge="加载失败!" />
        </div>
    );
}
