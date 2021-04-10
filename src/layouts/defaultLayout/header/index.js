import React from "react";
import * as service from "../../../utils/services";
import {NavLink} from "react-router-dom";
import {HeaderBox,HeaderContainer} from "./styles";
import PropTypes from "prop-types";

const handleLogOut = e =>{
    e.preventDefault();
    service.logOut();
};
const Header = props => {
    return (
        <HeaderBox>
            <HeaderContainer>
            <h1>{props.title}</h1>
            {props.btn
                &&
                <div className="btns">
                <button className="btn logout" onClick={handleLogOut}>log out</button>
                <NavLink exact to='/add' className="btn add">Add User</NavLink>
                </div>
                }
            </HeaderContainer>
        </HeaderBox>
    );
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
    btn: PropTypes.bool
};
export default Header;