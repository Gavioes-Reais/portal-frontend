import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../assets/img/logo.png';

import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import styles from './NavBar.module.css';

import DrawerComp from './Drawer';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="warning" position="sticky" >
      <Toolbar className={styles.spaceBeetwen}>
        <div>
          <DrawerComp />
          <Link to="/home">
            <IconButton>
              <img src={logo} alt="logo" className={styles.logo} />
            </IconButton>
          </Link>
        </div>
        <div>
          <IconButton 
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
            <AccountCircleOutlinedIcon className={styles.icons} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/profile" className={styles.link}>
              <MenuItem onClick={handleClose} className={styles.menu}>
                <span className={styles.conteudoMenu}> <PersonIcon/>  Perfil</span> 
              </MenuItem>
            </Link>
            <Link to="/bulletin"  className={styles.link}>
              <MenuItem onClick={handleClose} className={styles.menu}>
                <span className={styles.conteudoMenu}> <AssignmentIcon/>  Boletim</span> 
              </MenuItem>
            </Link>
            <Link  className={styles.link}>
              <MenuItem onClick={handleClose} className={styles.menu}>
                <span className={styles.conteudoMenu}> <LogoutIcon/>  Sair</span> 
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar