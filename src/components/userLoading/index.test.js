import React from "react";
import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import UserLoading from "./index";

configure ({adapter : new Adapter()})
describe('<UserLoading />', () => {
    test('renders', () => {
        const wrapper = shallow(<UserLoading isLoading={false} />);
        expect(wrapper.exists()).toBe(true)
    });
    test('should render Loading div if isLoading props is true', () => {
        const wrapper = shallow(<UserLoading isLoading={true} />);
        expect(wrapper.find("#loading").exists()).toBe(true)
    });
});