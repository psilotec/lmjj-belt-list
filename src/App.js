import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import BeltListContainer from './containers/belt_list_container';
import LoginStatus from './components/auth/login_status';
import Welcome from './components/welcome';
import AdminContainer from './containers/admin_container';

import firebase from 'firebase';
import { Layout, Menu, Icon } from 'antd';

import './styles/App.css';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: true,
  };

  componentWillMount() {
    // Listen for Auth Changes
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.loginPersist(user);
      } else {
        this.props.logout();
      }
    });
  }

  toggleSideMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item>
                  <Icon type="arrow-left" />
                  <span>
                    <a
                      href="https://www.lawmanjiujitsu.com/"
                      className="return-lmjj-site"
                    >
                      Back to LMJJ
                    </a>
                  </span>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to={`/belt-list`}>
                    <Icon type="bars" />
                    <span>Belt List</span>
                  </Link>
                </Menu.Item>
                {this.props.userDbInfo != null &&
                this.props.userDbInfo.admin ? (
                  <Menu.Item key="2">
                    <Link to={`/admin-panel`}>
                      <Icon type="upload" />
                      <span>Admin Console</span>
                    </Link>
                  </Menu.Item>
                ) : (
                  ''
                )}
              </Menu>
            </Sider>

            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="side-menu-trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggleSideMenu}
                />
                <LoginStatus
                  loggedIn={this.props.loggedIn}
                  userAuthInfo={this.props.userAuthInfo}
                  logout={this.props.logout}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <Route
                  exact={true}
                  path="/"
                  render={() =>
                    this.props.loggedIn ? (
                      <Redirect to="/belt-list" />
                    ) : (
                      <Welcome />
                    )}
                />
                <Route path="/belt-list" component={BeltListContainer} />
                <Route path="/admin-panel" component={AdminContainer} />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
