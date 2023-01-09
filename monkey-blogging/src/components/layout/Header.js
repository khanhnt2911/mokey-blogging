import { Button } from "components/button";
import { IconSearch } from "components/icon";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const menuLink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/block",
    title: "Block",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const HeaderStyle = styled.div`
  .header-main {
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    & li {
      list-style: none;
    }
  }
  .header-right {
    margin-left: auto;
  }
  .search {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    margin-left: auto;
    display: flex;
    align-items: center;
    position: relative;
  }
  .search-input {
    flex: 1;
    padding-left: 5px;
    padding-right: 45px;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
  .header-button {
    margin-left: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-main">
          <NavLink to={"/"}>
            <img className="logo" srcSet="logo.png 2x" alt="monkey-blogging" />
          </NavLink>
          <ul className="menu">
            {menuLink.map((item, index) => {
              return (
                <li className="menu-item" key={item.title}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="search post..."
            />
            <span className="search-icon">
              <IconSearch></IconSearch>
            </span>
          </div>
          <Button
            className="header-button"
            style={{ maxWidth: "200px", height: "46px" }}
          >
            {" "}
            Sign up
          </Button>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
