import React from "react";
import { LoadingRow, Avatar, UserInfo, Btn,Text } from "./styles";
import PropTypes from "prop-types";

const UserLoading = props => {
  return( <>
          {props.isLoading
              &&
              <div id="loading">
              <LoadingRow>
                  <Avatar className="loading-animate" />
                  <UserInfo>
                      <Text className="loading-animate" width={40} />
                      <Text className="loading-animate" width={50} />
                  </UserInfo>
                  <Btn className="loading-animate" right={0}  width={60}/>
                  <Btn className="loading-animate" right={70}   width={45}/>
              </LoadingRow>
                  <LoadingRow>
                      <Avatar className="loading-animate" />
                      <UserInfo>
                          <Text className="loading-animate" width={40} />
                          <Text className="loading-animate" width={50} />
                      </UserInfo>
                      <Btn className="loading-animate" right={0}  width={60}/>
                      <Btn className="loading-animate" right={70}   width={45}/>
                  </LoadingRow>
                  <LoadingRow>
                      <Avatar className="loading-animate" />
                      <UserInfo>
                          <Text className="loading-animate" width={40} />
                          <Text className="loading-animate" width={50} />
                      </UserInfo>
                      <Btn className="loading-animate" right={5}  width={60}/>
                      <Btn className="loading-animate" right={75}   width={45}/>
                  </LoadingRow>
              </div>
          }
      </>
    );
};
UserLoading.propTypes = {
    isLoading : PropTypes.bool.isRequired
};
export default UserLoading;
