import React from "react";
import { fireEvent, render } from "react-testing-library";
import { ImageStateEnum, XyImage } from "../src";
const MockImg = require("./xx.png");

describe("xylib-image", () => {
    test("render", () => {
        const wrapper = render(<XyImage src={MockImg} alt="logo" />);

        // act 模拟img加载成功事件
        fireEvent.load(wrapper.getByAltText("logo"));

        const { container } = wrapper;
        const img = wrapper.getAllByAltText("logo")[0] as HTMLImageElement;

        const span = container.querySelector("[data-status]");
        expect(span.classList.contains("xy-image")).toBeTruthy();
        expect(span.getAttribute("data-status")).toBe(ImageStateEnum.Complete.toString());
        expect(img.classList.contains("xy-image__img")).toBeTruthy();
    });

    test("load success", () => {
        const callback = jest.fn();
        const wrapper = render(<XyImage src="logo.png" alt="logo" onLoad={callback} />);

        // act 模拟img加载成功事件
        fireEvent.load(wrapper.getByAltText("logo"));

        expect(callback).toBeCalled();
    });

    test("load fail", () => {
        const fail = jest.fn();

        const wrapper = render(<XyImage src="logo.png" alt="logo" onError={fail} />);

        // act 模拟img加载失败事件
        fireEvent.error(wrapper.getByAltText("logo"));

        expect(fail).toBeCalled();
    });

    test("change src", () => {
        const callback = jest.fn();

        const wrapper = render(<XyImage src="logo.png" alt="logo" onLoad={callback} />);
        fireEvent.load(wrapper.getByAltText("logo"));
        var img = wrapper.getAllByAltText("logo")[0] as HTMLImageElement;
        expect(callback).toBeCalled();
        expect(img.src).toBe("http://localhost/logo.png");

        wrapper.rerender(<XyImage src="new.png" alt="logo" onLoad={callback} />);
        fireEvent.load(wrapper.getByAltText("logo"));

        expect(callback.mock.calls.length).toBe(2);
        expect(img.src).toBe("http://localhost/new.png");
    });

    test("status", () => {
        const wrapper = render(<XyImage src="logo.png" alt="logo" />);
        fireEvent.loadStart(wrapper.getByAltText("logo"));

        const { container } = wrapper;
        var span = container.querySelector("[data-status]");
        expect(span.getAttribute("data-status")).toBe(ImageStateEnum.Loading.toString());

        fireEvent.load(wrapper.getByAltText("logo"));
        expect(span.getAttribute("data-status")).toBe(ImageStateEnum.Complete.toString());

        fireEvent.error(wrapper.getByAltText("logo"));
        expect(span.getAttribute("data-status")).toBe(ImageStateEnum.Fail.toString());
    });

    test("placeholder", () => {
        const wrapper = render(<XyImage src="logo.png" alt="logo" placeholder="加载中..." />);
        const { container } = wrapper;
        var placeholder = container.querySelector(".xy-image__placeholder");

        expect(placeholder.textContent).toBe("加载中...");
    });

    test("onClick trigger", () => {
        const fn = jest.fn();
        const wrapper = render(<XyImage src="logo.png" alt="logo" onClick={fn} />);
        fireEvent.click(wrapper.getByAltText("logo"));
        expect(fn).toBeCalled();
    });
});
