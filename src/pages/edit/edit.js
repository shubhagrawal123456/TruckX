import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { connect } from "react-redux";
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import get from "lodash/get";
import PropTypes from "prop-types";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        first_name: "",
        last_name: "",
        email : "",
        submitted: false,
    };
  }
    componentDidMount() {
        // get user by id
        const {id} = this.props.match.params;
        this.props.get(id);
    }
    componentWillReceiveProps(nextProps) {
        const { user } = nextProps;
        this.setState({
                        first_name: get(user, "first_name", "") ,
                        last_name : get(user, "last_name", ""),
                        email : get(user, "email", "")
                    }
            );
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const {id} = this.props.match.params;
        this.setState({ submitted: true });
        const { first_name, last_name,email } = this.state;
        // stop here if form is invalid
        if (!(first_name && last_name && email)) {
            return;
        }
        // call saga reducer
        this.props.update(id,first_name, last_name,email)
    };

  render() {
    const { loading } = this.props;
    const { first_name, last_name, submitted  } = this.state;
    const title = 'Edit';
    return (
      <DefaultLayout title={title}>
        <PublicHead title={title} />
          <div className="form-box">
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                          type="text"
                          name="first_name"
                          className={'form-input' + (submitted && !first_name ? ' error' : '')}
                          value={first_name}
                          onChange={this.handleChange}
                          disabled={loading}
                      />
                      {submitted && !first_name && (
                          <div className="error-block first_name">First Name is required.</div>
                      )}
                  </div>
                  <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                          type="text"
                          name="last_name"
                          className={'form-input' + (submitted && !last_name ? ' error' : '')}
                          value={last_name}
                          onChange={this.handleChange}
                          disabled={loading}
                      />
                      {submitted && !last_name && (
                          <div className="error-block last_name">Last Name is required.</div>
                      )}
                  </div>
                  <div className="form-group">
                      <button className="form-btn" disabled={loading}>
                          {loading ? <><i className="fas fa-spinner  fa-spin"/> loading ...</> : "Save"}
                      </button>
                  </div>
              </form>
          </div>
      </DefaultLayout>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.edit.loading,
  user: state.edit.user
});
const mapDispatchToProps = dispatch => {
  const { get , update  } = actions;
  return bindActionCreators({ get, update }, dispatch);
};
Edit.propTypes = {
    loading : PropTypes.bool,
    user : PropTypes.object,
    get: PropTypes.func,
    update: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
