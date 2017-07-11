import React, { Component } from 'react'; 
import { Menu } from 'antd';

class Header extends Component {
    state = {
        current: 'beltlist',
    }

    handleClick = (event) => {
        this.setState({
            current: event.key,
        });
    }   

    render() {
        return (
            <div className="header">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="beltlist">
                        Belt List
                    </Menu.Item>

                    <Menu.Item key="settings">
                        Settings
                    </Menu.Item>

                    <Menu.Item key="return">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Return to Lawman Jiu Jitsu</a>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;