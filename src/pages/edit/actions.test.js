import React from "react";
import * as actions from "./actions";
import * as constants from "./constants";

const my_sample_id = 10;
const my_sample_first_name = "my sample first name";
const my_sample_last_name = "my sample last name";
const my_sample_avatar = "http://example.com/image.png";
describe('edit actions', () => {
    test('should create an action to set a user data', () => {
        const data = {my_sample_first_name,my_sample_last_name};
        const expectedAction = {
            type: constants.SET,
            payload: {
                user: data
            }
        }
        expect(actions.set(data)).toEqual(expectedAction)
    });
    test('should create an action to update a user data', () => {
        const expectedAction = {
            type: constants.UPDATE,
            payload: {
                id: my_sample_id,
                first_name: my_sample_first_name,
                last_name: my_sample_last_name,
                avatar: my_sample_avatar
            }
        }
        expect(actions.update(my_sample_id,my_sample_first_name,my_sample_last_name,my_sample_avatar)).toEqual(expectedAction)
    });
    test('should create an action to get a user data by id', () => {
        const id = my_sample_id;
        const expectedAction = {
            type: constants.GET,
            payload: {
                id
            }
        }
        expect(actions.get(id)).toEqual(expectedAction)
    });
    test('should create an action to set failure status', () => {
        const message = "sample message";
        const expectedAction = {
            type: constants.FAILURE,
            payload: {
                failure : true,
                message :message
            },
        }
        expect(actions.failure(true,message)).toEqual(expectedAction)
    });
    test('should create an action to set loading status', () => {
        const expectedAction = {
            type: constants.LOADING,
            payload: {
                loading : true,
            },
        }
        expect(actions.loading(true)).toEqual(expectedAction)
    });
});