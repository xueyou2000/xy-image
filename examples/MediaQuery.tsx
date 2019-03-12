import React from "react";
import { action } from "@storybook/addon-actions";
import { XyImage } from "../src";
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
            <XyImage
                src="https://source.unsplash.com/lxuB4abGzXc/800x1000"
                querieConfigs={q}
                width="100%"
                placeholder={<img src={squares} />}
                onLoad={action("图片加载成功事件")}
                onError={action("图片加载失败事件")}
                errorIamge={
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551704319746&di=b7276a9504d64001deac565f0f9be60c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F82%2F88573c6372e4ae5.jpg" />
                }
            />
        </div>
    );
}
