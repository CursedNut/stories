import { Col, Divider, Drawer, Row } from 'antd';
import React, { useState } from 'react';

interface UserDrawerProps {
  open?: boolean;
  onClose: () => void;
}

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
};

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div style={{
    marginBottom: '7px',
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: '14px',
    lineHeight: '1.5715'
  }}>
    <p style={{
      display: 'inline-block',
      marginRight: '8px',
      color: 'rgba(0, 0, 0, 0.85)'
    }}>{title}:</p>
    {content}
  </div>
);

export const UserDrawer = (props: UserDrawerProps) => {
  const {open, onClose} = props;

  return (
    <Drawer
      title="Профиль"
      placement='right'
      onClose={onClose}
      open={open}
      width={640}
    >
      <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        User Profile
      </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content="Lily" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Account" content="AntDesign@example.com" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="HangZhou" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="China🇨🇳" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Company</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Contacts</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content="AntDesign@example.com" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
              </a>
            }
          />
        </Col>
      </Row>
    </Drawer>
  )
}
