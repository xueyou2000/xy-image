import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { ImageProps } from "./interface";
import useMedia from "utils-hooks/es/useMedia";

export enum ImageStateEnum {
    /**
     * 加载中
     */
    Loading,
    /**
     * 加载完毕
     */
    Complete,
    /**
     * 加载失败
     */
    Fail
}

export function XyImage(props: ImageProps) {
    const { prefixCls = "xy-image", className, style, querieConfigs = [], placeholder = null, errorIamge = null, onError, onLoad, ...rest } = props;
    const [status, setStatus] = useState<ImageStateEnum>(ImageStateEnum.Loading);

    // 媒体查询变换图片
    const queries = querieConfigs.map((cfg) => (typeof cfg.querie === "string" ? cfg.querie : `(min-width: ${cfg.querie}px)`));
    const srcs = querieConfigs.map((cfg) => cfg.src);
    const media_src = useMedia(queries, srcs, props.src);

    // 从props.src设置图片链接, 还是从媒体查询配置
    const src = querieConfigs.length === 0 ? props.src : media_src;

    function renderContent() {
        switch (status) {
            case ImageStateEnum.Loading:
                return <span className={`${prefixCls}__placeholder`}>{placeholder}</span>;
            case ImageStateEnum.Fail:
                return <span className={`${prefixCls}__error`}>{errorIamge}</span>;
            default:
                return null;
        }
    }

    function handleImgLoad() {
        setStatus(ImageStateEnum.Complete);
        if (onLoad) {
            onLoad();
        }
    }

    function handleImgError() {
        setStatus(ImageStateEnum.Fail);
        if (onError) {
            onError();
        }
    }

    useEffect(() => {
        setStatus(ImageStateEnum.Loading);
    }, [src]);

    return (
        <span className={classNames(prefixCls, className)} style={style} data-status={status}>
            <img {...rest} src={src} className={`${prefixCls}__img`} onLoad={handleImgLoad} onError={handleImgError} style={{ display: status === ImageStateEnum.Complete ? "initial" : "none" }} />
            {renderContent()}
        </span>
    );
}

export default XyImage;
