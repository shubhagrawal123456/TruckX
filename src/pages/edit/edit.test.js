import React from "react";
import ConnectedEdit , {Edit} from "./edit";
import {configure, shallow,mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { store } from "../../store";
import * as constants from "./constants";
import * as actions from "./actions";
import * as userListActions from "../home/usersList/actions";

configure ({adapter : new Adapter()})
const my_sample_id = 10;
const my_sample_first_name = "my sample first name";
const my_sample_last_name = "my sample last name";
const my_sample_avatar = "http://example.com/image.png";
const match = {params: {id: my_sample_id}};
describe('<Edit />', () => {
    test('renders connected', () => {
        const wrapper = shallow(<ConnectedEdit store={store} match={match} />);
        expect(wrapper.exists()).toBe(true)
    });
    test('should change button text and disability by changing loading props', () => {
        const wrapper = shallow(<Edit />,{disableLifecycleMethods: true});
        wrapper.setProps({loading:true})
        expect(wrapper.find('.form-btn').text()).toBe(' loading ...');
        expect(wrapper.find('.form-btn').props().disabled).toBe(true);
        wrapper.setProps({loading : false});
        expect(wrapper.find('.form-btn').text()).toBe('Save');
        expect(wrapper.find('.form-btn').props().disabled).toBe(false);
    });
    test('should set states on change inputs', () => {
        const wrapper = shallow(<Edit />,{disableLifecycleMethods: true});
        wrapper.find('input[name="first_name"]').simulate('change',{target: {name: "first_name", value: my_sample_first_name}});
        expect(wrapper.state().first_name).toBe(my_sample_first_name);
        wrapper.find('input[name="last_name"]').simulate('change',{target: {name: "last_name", value: my_sample_last_name}});
        expect(wrapper.state().last_name).toBe(my_sample_last_name);
    });
    test('should set submitted states on submit form', () => {
        const wrapper = shallow(<Edit match={match} />,{disableLifecycleMethods: true});
        wrapper.find('form').simulate('submit', {preventDefault: () => {},target: [], });
        expect(wrapper.state().submitted).toBe(true);
    });
    test('should stop submiting form if values are invalid', () => {
        const wrapper = shallow(<Edit match={match} />,{disableLifecycleMethods: true});
        wrapper.find('form').simulate('submit', {preventDefault: () => {},target: [], });
        expect(wrapper.find('.error-block.first_name').exists()).toBe(true);
        expect(wrapper.find('.error-block.last_name').exists()).toBe(true);
    });
    test('should dispatch set action ', () => {
        const wrapper = shallow(<ConnectedEdit store={store} match={match} />,{disableLifecycleMethods: true});
        expect(wrapper.props().update(my_sample_id,my_sample_first_name,my_sample_last_name,my_sample_avatar))
            .toEqual({type: constants.UPDATE,payload:  {id:my_sample_id,first_name:my_sample_first_name,last_name:my_sample_last_name,avatar:my_sample_avatar}});
    });

});