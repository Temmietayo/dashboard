import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Tooltip,
  Button,
  Icon,
  Table,
  Divider,
  Tag
} from "antd";
import "antd/dist/antd.css";
import WardTable from "./WardTable";

export default class Ward extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col
            md={14}
            style={{
              backgroundColor: "#F8F9F9"
            }}
          >
            <Row>
              <Col md={12}>
                <h1>All Ward</h1>
              </Col>
              <Col md={4}>
                <Button>Add new Ward</Button>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Input
                  placeholder="Search"
                  suffix={
                    <Tooltip title="Enter Search Word">
                      <Icon
                        type="search"
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />

                <br />
              </Col>
            </Row>
            <Row>
              <WardTable />
            </Row>
          </Col>
          <Col md={8}></Col>
        </Row>
      </div>
    );
  }
}
