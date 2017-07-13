import React, { Component } from 'react';
import './styles/App.css';
import BeltListContainer from './containers/belt_list_container';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="app">
        <Layout>

          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              LMJJ
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="arrow-left" />
                <span>Back to Lawman Jiu Jitsu</span>
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
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <BeltListContainer />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;




