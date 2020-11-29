import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {Menu, Dropdown, Button} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
    <Link className="nav-link text" to="/">
                Popular
            </Link>
    </Menu.Item>
    <Menu.Item>
    <Link className="nav-link text" to="/movies/upcoming">
                Upcoming
            </Link>
    </Menu.Item>
    <Menu.Item>
    <Link className="nav-link text" to="/movies/now-playing">
                Now-playing
            </Link>
    </Menu.Item>
    <Menu.Item>
    <Link className="nav-link text" to="/movies/top-rated">
                Top-rated
            </Link>
    </Menu.Item>
  </Menu>
);

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link to='/'>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20"></img>
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              <Button className="navbar  navbar-light text-white  bg-dark ">Login</Button>
            </Link>
          </li>
          <Dropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
          <li className="nav-item">
            <div className="nav-link text-white">
              <Button className="navbar  navbar-light text-white  bg-dark ">
                Movies
              </Button>
            </div>
          </li>
          </Dropdown>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/person">
            <Button className="navbar  navbar-light text-white  bg-dark ">
              People
              </Button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
            <Button className="navbar  navbar-light text-white  bg-dark ">
              Favorites
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;