import React from "react";
import Header from "./header";
import {Container} from "./styles";
import PropTypes from "prop-types";

const DefaultLayout = props => {
  return (
    <>
      <Header title={props.title} btn={props.private} />
        <Container><div className="container">{props.children}</div></Container>
    </>
  );
};
DefaultLayout.propTypes = {
    title : PropTypes.string.isRequired,
    private: PropTypes.bool,
    children: PropTypes.any
};
export default DefaultLayout;

