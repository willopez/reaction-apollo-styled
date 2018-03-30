import React from 'react';
import styled from 'styled-components';
import { NavLink,  } from 'react-router-dom';

export default () => {
  const SideMenu = styled.div`
    width: 30%;
    backgroundh-color: blue;
    float: left;
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
    background-color: #f5f5f5
    padding: 15px 20px;
    margin-bottom: 4px;
    display: block;
    &.${activeClassName} {
      background-color: #ebf7fc;
    }
  `;
  return (
    <SideMenu>
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