import React from 'react';
import {configure, shallow} from 'enzyme';
import {  Redirect } from 'react-router';
import { PrivateRoute } from './index';
import Adapter from "enzyme-adapter-react-16";

configure ({adapter : new Adapter()})
describe('<PrivateRoute/>', () => {
    test('redirects unauthenticated users to login', () => {
        localStorage.removeItem('authToken');
        const { wrapper } = setup();
        const ComponentToRender = wrapper.prop('render');
        const redirectWrapper = shallow(<ComponentToRender location="/private" />);
        expect(redirectWrapper.find(Redirect).props()).toEqual({
            push: false,
            to: {
                pathname: '/login',
                state: { from: '/private' }
            }
        });
    });
    test('displays passed component to authenticated users', () => {
        localStorage.setItem('authToken', "QpwL5tke4Pnpja7X");
        const { wrapper, props } = setup();
        const ComponentToRender = wrapper.prop('render');
        const componentWrapper = shallow(<ComponentToRender location="/private" />);
        expect(componentWrapper.is(props.component)).toBe(true);
        expect(componentWrapper.props()).toEqual({
            location: '/private'
        });
    });

});

function setup(customProps) {
    const props = {
        component: () => <h1>Some Title</h1>,
        ...customProps
    };

    const wrapper = shallow(<PrivateRoute {...props} />);

    return {
        wrapper,
        props
    }
}