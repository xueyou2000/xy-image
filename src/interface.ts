export interface ImageProps {
    /**
     * 媒体查询配置
     */
    querieConfigs?: MediaQueryConfig[];
    /**
     * 图像占位符
     */
    placeholder?: React.ReactNode;
    /**
     * 错误图像
     */
    errorIamge?: React.ReactNode;
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 图像路径
     */
    src: string;
    /**
     * ID
     */
    id?: string;
    /**
     * 图片描述
     */
    alt?: string;
    /**
     * 跨域源
     */
    crossOrigin?: "anonymous" | "use-credentials" | "";
    /**
     * 图片宽度
     */
    width?: number | string;
    /**
     * 图片高度
     */
    height?: number | string;
    /**
     * 点击事件
     */
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    /**
     * 图片加载完毕
     */
    onLoad?: () => void;
    /**
     * 图片加载失败
     */
    onError?: () => void;
}

export interface MediaQueryConfig {
    /**
     * 媒体查询
     * (min-width: 1500px) 字符串 或 1500 数值
     */
    querie: string | number;
    /**
     * 对应查询显示图片路径
     */
    src: string;
}
