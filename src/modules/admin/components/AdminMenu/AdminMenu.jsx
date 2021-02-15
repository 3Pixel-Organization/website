import React from 'react';
import { FaBox, FaTag, FaUsers } from 'react-icons/fa';

import { Menu } from 'modules/admin/components/Menu/Menu';

const menuItems = [
  {
    text: 'Manage Permissions',
    link: '/admin/permissions',
    icon: <FaTag />,
  },
  {
    text: 'Manage Roles',
    link: '/admin/roles',
    icon: <FaBox />,
  },
  {
    text: 'Manage Users',
    link: '/admin/users',
    icon: <FaUsers />,
  },
];

export const AdminMenu = () => {
  return <Menu menuItems={menuItems} />;
};
