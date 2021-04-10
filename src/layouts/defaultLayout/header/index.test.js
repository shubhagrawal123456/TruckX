import React from "react";
import Header from "./index";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<Header />", () => {
  test("renders", () => {
    const wrapper = shallow(<Header title="title" />);
    expect(wrapper.exists()).toBe(true);
  });
    test("should render using props", () => {
        const wrapper = shallow(<Header title="title" btn={true}  />);
        expect(wrapper.find("h1").text()).toBe("title");
        expect(wrapper.find(".btns").exists()).toBe(true);
    });
    test("should log out", () => {
        const wrapper = shallow(<Header title="title" btn={true}  />);
        wrapper.find('.logout').simulate('click', {preventDefault: () => {},target: [], });
        expect(localStorage.getItem('authToken') !== null).toBe(false);
        const url = window.location.href.split("/");
        expect(url[3]).toEqual('login');
    });
});
