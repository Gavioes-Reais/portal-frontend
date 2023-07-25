import React, { useState } from "react";

import { Link } from 'react-router-dom';

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import menuIcon from '../../assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg'
import styles from './NavBar.module.css'

const pages = [
  {
    name: "Home",
    rota: "/home"
  },
  {
    name: "Calendário",
    rota: "/calendar"
  },
  {
    name: "Biblioteca",
    rota: "/library"
  }
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={styles.drawer}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <Link to={page.rota}>
                <ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemIcon>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <img src={menuIcon} alt="menu" className={styles.icons} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;