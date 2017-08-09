import React, { Component } from 'react';
import './styles/App.css';
import BeltListContainer from './containers/belt_list_container';
import LoginStatus from './components/login_status';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: true,
  };

  componentWillMount() {
    this.props.fetchBelts();
    this.props.fetchBeltImages();
  }

  toggleSideMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
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
                <Icon type="bars" />
                <span>Belt List</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span>User Settings</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>Admin Console</span>
              </Menu.Item>
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
              <BeltListContainer />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
