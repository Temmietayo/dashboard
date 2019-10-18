import React, { Component } from "react";
import { Row, Col, Card, Grid, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class DashboardBody extends Component {
  render() {
    return (
      <div
        style={{
          background: "#F8F9F9",
          padding: "20px"
        }}
      >
        <Row>
          <Col md={21}>
            <h1
              style={{
                fontWeight: "bold"
              }}
            >
              Dashboard
            </h1>
          </Col>
          <Col md={3}>
            <Button
              style={{
                backgroundColor: "#FFF",
                color: "#000",
                borderRadius: "30px",
                width: "150px",
                boxShadow: "1px",
                border: "1px solid #000"
              }}
            >
              Add new Ward
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Summary
            </h3>
          </Col>
        </Row>

        <Row gutter={48}>
          <Col md={12}>
            <Card
              style={{
                height: "250px",
                borderRadius: "10px"
              }}
            >
              <Row>
                <Col md={12}>
                  <h1
                    style={{
                      fontSize: "70px"
                    }}
                  >
                    15
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={20}>
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    Wards registered
                  </span>
                </Col>
                <Col md={4}>
                  <Button
                    style={{
                      borderRadius: "30px"
                    }}
                  >
                    See all
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={12}>
            <Card
              style={{
                height: "250px",
                borderRadius: "10px"
              }}
            >
              <Row>
                <Col md={12}>
                  <h1
                    style={{
                      fontSize: "70px"
                    }}
                  >
                    400
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={20}>
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    Total devices deployed
                  </span>
                </Col>
                <Col md={4}>
                  <Button>See all</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row
          gutter={48}
          style={{
            paddingTop: "20px"
          }}
        >
          <Col md={12}>
            <Card
              style={{
                height: "250px",
                borderRadius: "10px"
              }}
            >
              <Row>
                <Col md={12}>
                  <h1
                    style={{
                      fontSize: "70px"
                    }}
                  >
                    189
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={20}>
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    All nurses registered
                  </span>
                </Col>
                <Col md={4}>
                  <Button>See all</Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={12}>
            <Card
              style={{
                height: "250px",
                borderRadius: "10px"
              }}
            >
              <Row>
                <Col md={12}>
                  <h1
                    style={{
                      fontSize: "70px"
                    }}
                  >
                    532
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={20}>
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    All operations done
                  </span>
                </Col>
                <Col md={4}>
                  <Button>See all</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
