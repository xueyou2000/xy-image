import React, { useState } from "react";
import Image from "../src";
import "../src/assets/index";
import squares from "./squares.svg";
import { ImageProps } from "../src/interface";
import { useObserver } from "utils-hooks";
import "./index.scss";

function LazyImage(props: ImageProps) {
    const [ref, visible] = useObserver(true);

    return (
        <span ref={ref} className="lazy-image">
            <Image {...props} stop={!visible} loadNode={<img width="150" src={squares} />} failNode="图片加载失败!" />
        </span>
    );
}

export default function LazyImageDemo() {
    return (
        <div className="app">
            <h1>建设网络强国，习近平精心谋划部署</h1>

            <p>【编前语】党的十八大以来，习近平总书记准确把握时代大势，就网信事业发展发表一系列重要讲话，鲜明提出网络强国思想。新华社《学习进行时》为您回顾梳理总书记的精彩论述，与您共同学习。</p>

            <LazyImage src="https://inews.gtimg.com/newsapp_ls/0/8206128013_294195/0" />

            <h2>把握时代大势</h2>

            <p>信息化和经济全球化相互促进，互联网已经融入社会生活方方面面，深刻改变了人们的生产和生活方式。我国正处在这个大潮之中，受到的影响越来越深。</p>

            <p>——2014年2月27日，在中央网络安全和信息化领导小组第一次会议上的讲话</p>

            <p>当今世界，网络信息技术日新月异，全面融入社会生产生活，深刻改变着全球经济格局、利益格局、安全格局。世界主要国家都把互联网作为经济发展、技术创新的重点，把互联网作为谋求竞争新优势的战略方向。</p>

            <p>——2016年10月9日，在十八届中共中央政治局第三十六次集体学习时的讲话</p>

            <p>网信事业代表着新的生产力和新的发展方向，应该在践行新发展理念上先行一步，围绕建设现代化经济体系、实现高质量发展，加快信息化发展，整体带动和提升新型工业化、城镇化、农业现代化发展。</p>

            <p>——2018年4月20日至21日，在全国网络安全和信息化工作会议上的讲话</p>

            <LazyImage src="https://inews.gtimg.com/newsapp_ls/0/8206269376_294195/0" />

            <h2>明确发展路径</h2>

            <p>建设网络强国，要有自己的技术，有过硬的技术；要有丰富全面的信息服务，繁荣发展的网络文化；要有良好的信息基础设施，形成实力雄厚的信息经济；要有高素质的网络安全和信息化人才队伍；要积极开展双边、多边的互联网国际交流合作。</p>

            <p>——2014年2月27日，在中央网络安全和信息化领导小组第一次会议上的讲话</p>

            <p>建设网络强国的战略部署要与“两个一百年”奋斗目标同步推进，向着网络基础设施基本普及、自主创新能力显著增强、信息经济全面发展、网络安全保障有力的目标不断前进。</p>

            <p>——2014年2月27日，在中央网络安全和信息化领导小组第一次会议上的讲话</p>

            <LazyImage src="https://source.unsplash.com/lxuB4abGzXc/800x1000" />

            <p>要建设网络强国、数字中国、智慧社会，推动互联网、大数据、人工智能和实体经济深度融合，发展数字经济、共享经济，培育新增长点、形成新动能。</p>

            <p>——2017年12月3日，致第四届世界互联网大会的贺信</p>

            <h2>以人民为中心</h2>

            <p>要适应人民期待和需求，加快信息化服务普及，降低应用成本，为老百姓提供用得上、用得起、用得好的信息服务，让亿万人民在共享互联网发展成果上有更多获得感。</p>

            <p>——2016年4月19日，在网络安全和信息化工作座谈会上的讲话</p>

            <LazyImage src="https://source.unsplash.com/d30sszrW7Vw/800x800" />

            <p>网信事业发展必须贯彻以人民为中心的发展思想，把增进人民福祉作为信息化发展的出发点和落脚点，让人民群众在信息化发展中有更多获得感、幸福感、安全感。</p>

            <p>——2018年4月20日至21日，在全国网络安全和信息化工作会议上的讲话</p>

            <h2>保障网络安全</h2>

            <p>没有网络安全就没有国家安全，没有信息化就没有现代化。</p>

            <p>——2014年2月27日，在中央网络安全和信息化领导小组第一次会议上的讲话</p>

            <p>网络安全为人民，网络安全靠人民，维护网络安全是全社会共同责任，需要政府、企业、社会组织、广大网民共同参与，共筑网络安全防线。</p>

            <p>——2016年4月19日，在网络安全和信息化工作座谈会上的讲话</p>

            <LazyImage src="https://source.unsplash.com/mDuluxr50Ew/800x500" />

            <h2>营造清朗网络空间</h2>

            <p>网络安全和信息化是事关国家安全和国家发展、事关广大人民群众工作生活的重大战略问题，要从国际国内大势出发，总体布局，统筹各方，创新发展，努力把我国建设成为网络强国。</p>

            <p>——2014年2月27日，在中央网络安全和信息化领导小组第一次会议上的讲话</p>

            <p>网络空间是亿万民众共同的精神家园。网络空间天朗气清、生态良好，符合人民利益。网络空间乌烟瘴气、生态恶化，不符合人民利益。</p>
        </div>
    );
}
