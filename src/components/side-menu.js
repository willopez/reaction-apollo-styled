import React from 'react';
import styled from 'styled-components';
import { NavLink,  } from 'react-router-dom';

import SideUserInfo from './side-user-info';

export default () => {
  const SideMenu = styled.div`
    width: 30%;
    float: left;
    margin-right: 34px;
  `;

  const SideMenuItem = styled.li`
    list-style-type: none;
  `;

  const activeClassName = 'nav-item-active'
  const Link = styled(NavLink).attrs({
      activeClassName
    })`

    color: #505558;
    text-decoration: none;
    background-color: #f5f5f5;
    padding: 15px 20px;
    margin-bottom: 4px;
    display: block;
    &.${activeClassName} {
      background-color: #ebf7fc;
  `;
  return (
    <SideMenu>
      <SideUserInfo />
      <ul>
      <SideMenuItem>
        <Link
          to="/profile/details"
          exact
        >Account</Link>
        </SideMenuItem>
        <SideMenuItem>
        <Link
        to="/profile/address-book"
        exact
        >Address Book</Link>
      </SideMenuItem>
      </ul>
    </SideMenu>
  );
}