import React from 'react'
import NavBar from '../../components/Navbar/NavBar';

import Card from '@mui/material/Card'

import styles from './home.module.css'

function Home() {
    return (
    <>
        <NavBar/>
        <div className={styles.full_view}>
            <Card className={styles.componentes_curriculares}>Componentes curiculares</Card>
            <Card className={styles.atividades_proximas}>Atividades próximas</Card>
        </div>
    </>  
    );
}

export default Home