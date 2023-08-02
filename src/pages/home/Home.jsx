import React, { useEffect, useState } from 'react';
import MatterService from '../../services/MattService';

import NavBar from '../../components/Navbar/NavBar';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './home.module.css'
import MaterialCard from '../../components/MaterialCard/MaterialCard';

const atividades = []

function Home() {
    const [matters, setMatters] = useState([]);

    useEffect(() => {
        fetchMatters();
    }, []);

    const fetchMatters = async () => {
        try {
          const matterList = await MatterService.getAll();
          setMatters(matterList);
        } catch (error) {
          console.error('Erro ao obter as matérias:', error);
        }
    };

    return (
    <>
        <NavBar/>
        <div className={styles.full_view}>
            <Card className={styles.componentes_curriculares}>
                <CardHeader title="Componentes curriculares" className={styles.CardHeader} />
                <div className={styles.content}>
                    {matters.length > 0 &&
                    matters.map((data) => (
                        <MaterialCard
                        id={data.id}
                        title={data.name}
                        series={data.series}
                        percentage_completed={0}
                        key={data.id}
                        img={data.img_url}
                        />
                    ))}
                    {matters.length === 0 && (
                        <div className={styles.not_found_courses}>
                           <h1>Nenhum componente curricular foi encontrado</h1>
                           <CircularProgress color='warning'/>
                        </div>
                    )}
                </div>
            </Card>
            <Card className={styles.atividades_proximas}>
                <CardHeader title="Atividades proximas" className={styles.CardHeader} />
                {atividades.length > 0 &&
                    atividades.map((data) => (
                        <div
                        id={data.id} 
                        key={data.id}
                        >
                            Atividadees
                        </div>
                    ))}
                {atividades.length === 0 && (
                    <div className={styles.not_found_actividades}>
                        <h4>Nenhuma atividade foi encontrada </h4>
                        <br/>
                        <CircularProgress color='warning'/>
                    </div>
                )}
            </Card>
        </div>
    </>  
    );
}

export default Home