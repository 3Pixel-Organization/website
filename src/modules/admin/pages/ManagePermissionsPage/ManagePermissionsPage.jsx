import React from 'react';
import { ImCross } from 'react-icons/im';
import { FaList, FaPen } from 'react-icons/fa';

import { Card, Col, Container, Hero, Row, Table } from 'modules/common/components';

import { AdminMenu } from 'modules/admin/components/AdminMenu/AdminMenu';
import { Menu } from 'modules/admin/components/Menu/Menu';

const LocalMenu = () => {
  return (
    <Menu
      menuItems={[
        {
          text: 'List Permissions',
          link: '/admin/permissions/list',
          icon: <FaList />,
        },
        {
          text: 'Create Permissions',
          link: '/admin/permissions/create',
          icon: <FaList />,
        },
      ]}
    />
  );
};

export const ManagePermissionsPage = () => {
  return (
    <>
      <Hero compact title="Permissions Management" />
      <Container style={{ minHeight: '60vh' }}>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <Container style={{ padding: '0' }}>
              <Row>
                <Col xs={12}>
                  <LocalMenu />
                  <hr style={{ margin: '0' }} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <AdminMenu />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <Card>
              <h2>Available Permissions</h2>
              <Table
                rows={[
                  ['id', 'module', 'capability', 'scope', 'actions'],
                  [
                    '8356a478ebe5f89f68453463457',
                    '3pixel.news',
                    'write',
                    null,
                    <>
                      <ImCross />
                      <FaPen />
                    </>,
                  ],
                ]}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
