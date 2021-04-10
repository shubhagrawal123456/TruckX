import React from "react";
import DefaultLayout from "./index";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<DefaultLayout />", () => {
  test("renders", () => {
    const wrapper = shallow(<DefaultLayout title="title" />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render Header component using props", () => {
    const wrapper = shallow(<DefaultLayout title="title" private={true} />);
    expect(wrapper.find("Header").props().title).toEqual("title");
    expect(wrapper.find("Header").props().btn).toEqual(true);
  });
    test("should render children inside container", () => {
        const wrapper = shallow(<DefaultLayout title="title" />);
        wrapper.setProps({children: "test"});
        expect(wrapper.find('.container').text()).toBe("test");
    });
});
