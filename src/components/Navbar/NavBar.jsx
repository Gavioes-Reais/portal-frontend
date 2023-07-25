import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import accountIcon from '../../assets/icons/account_circle_FILL0_wght400_GRAD0_opsz48.svg';
import logo from '../../assets/img/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

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
    <AppBar color="warning" position="static" >
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
            <img src={accountIcon} alt="perfl" className={styles.icons} />
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
            <MenuItem onClick={handleClose} className={styles.menu}>
              <span className={styles.conteudoMenu}><PersonIcon/> Perfil</span> 
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menu}>
              <span className={styles.conteudoMenu}><AssignmentIcon/> Boletim</span> 
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menu}>
              <span className={styles.conteudoMenu}><LogoutIcon/> Sair</span> 
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar