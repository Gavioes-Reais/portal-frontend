import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import accountIcon from '../../assets/icons/account_circle_FILL0_wght400_GRAD0_opsz48.svg';
import logo from '../../assets/img/logo.png'

import styles from './NavBar.module.css';

import DrawerComp from './Drawer';

const NavBar = () => {
  return (
    <AppBar color="warning" position="static" >
      <Toolbar className={styles.spaceBeetwen}>
        <div>
          <DrawerComp />
          <IconButton>
            <img src={logo} alt="logo" className={styles.logo} />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <img src={accountIcon} alt="perfl" className={styles.icons} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar