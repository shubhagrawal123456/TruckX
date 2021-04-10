import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const PublicHead = props => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};
PublicHead.propTypes = {
    title : PropTypes.string.isRequired
};
export default PublicHead;
