import React from 'react'
import NavBar from '../../components/Navbar/NavBar';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';

import styles from './home.module.css'
import MaterialCard from '../../components/MaterialCard/MaterialCard';

function Home() {
    return (
    <>
        <NavBar/>
        <div className={styles.full_view}>
            <Card className={styles.componentes_curriculares}>
                <CardHeader title="Componentes curriculares" className={styles.CardHeader} />
                <div className={styles.content}>
                    <MaterialCard className={styles.itens} />
                    <MaterialCard className={styles.itens} />
                    <MaterialCard className={styles.itens} />
                    <MaterialCard className={styles.itens} />
                    <MaterialCard className={styles.itens} />
                    <MaterialCard className={styles.itens} />
                </div>
            </Card>
            <Card className={styles.atividades_proximas}>
                <CardHeader title="Aticidades proximas" className={styles.CardHeader} />
            </Card>
        </div>
    </>  
    );
}

export default Home