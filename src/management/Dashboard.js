import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Grid, Menu, Row, Col, Card, Button, Icon } from "antd";
import "antd/dist/antd.css";
import DashboardBody from "./DashboardBody";

export default class Dashboard extends Component {
  state = {
    current: "mail",
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={2}>
            <div style={{ width: 256 }}>
              <Button
                type="primary"
                onClick={this.toggleCollapsed}
                style={{ marginBottom: 16 }}
              >
                <Icon
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                />
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="table" />
                  <span>Bed</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="tablet" />
                  <span>Devices</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span>Devices</span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="setting" />
                  <span>Devices</span>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col md={22}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="dashboard" />
                RealDrip
              </Menu.Item>
              <Button>Management</Button>

              <Menu.Item key="alipay">
                <a
                  href="https://ant.design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How it works
                </a>
              </Menu.Item>
            </Menu>
            <DashboardBody />
          </Col>
        </Row>
      </div>
    );
  }
}
