import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
    render: text => <a>{text}</a>
  },
  {
    title: "Wardname",
    dataIndex: "wardname",
    key: "wardname"
  },
  {
    title: "Devices deployed",
    dataIndex: "devices",
    key: "devices"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "inactive") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["active"]
  },
  {
    key: "2",
    label: "Ward A",
    wardname: "eye center",
    devices: 20,
    tags: ["inactive"]
  },
  {
    key: "3",
    label: "Ward A",
    wardname: "ear center",
    devices: 40,
    tags: ["active"]
  },
  {
    key: "4",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["inactive"]
  },
  {
    key: "5",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["active"]
  },
  {
    key: "6",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["inactive"]
  },
  {
    key: "7",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["active"]
  },
  {
    key: "8",
    label: "Ward A",
    wardname: "heart center",
    devices: 10,
    tags: ["inactive"]
  }
];

export default class WardTable extends Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
