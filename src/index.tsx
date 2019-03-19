import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useMedia } from "utils-hooks";
import { ImageProps, MediaQueryConfig } from "./interface";

/**
 * 图像加载状态
 */
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

/**
 * 获取图片src
 * @param querieConfigs
 * @param defaultSrc
 */
function useMedisSrc(querieConfigs: MediaQueryConfig[], defaultSrc: string) {
    // cfg.querie 支持媒体查询字符串和数值
    const queries = querieConfigs.map((cfg) => (typeof cfg.querie === "string" ? cfg.querie : `(min-width: ${cfg.querie}px)`));
    const srcs = querieConfigs.map((cfg) => cfg.src);
    return querieConfigs.length > 0 ? useMedia(queries, srcs, defaultSrc) : defaultSrc;
}

export function Image(props: ImageProps) {
    const { prefixCls = "xy-image", className, style, stop, querieConfigs = [], loadNode = null, failNode = null, onError, onLoad, ...rest } = props;
    const [status, setStatus] = useState(ImageStateEnum.Loading);
    const src = useMedisSrc(querieConfigs, props.src);
    const imgStyle = { display: status === ImageStateEnum.Complete ? "inline-block" : "none" };

    function renderContent() {
        switch (status) {
            case ImageStateEnum.Loading:
                return <span className={`${prefixCls}_loadNode`}>{loadNode}</span>;
            case ImageStateEnum.Fail:
                return <span className={`${prefixCls}_failNode`}>{failNode}</span>;
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
            {!stop && <img {...rest} src={src} className={`${prefixCls}_img`} onLoad={handleImgLoad} onError={handleImgError} style={imgStyle} />}
            {renderContent()}
        </span>
    );
}

export default React.memo(Image);
