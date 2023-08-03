import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MatterService from '../../services/MattService';

import NavBar from '../../components/Navbar/NavBar'
import Card from '@mui/material/Card'

import styles from './Course.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
  let { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetchMatters();
  });

  const fetchMatters = async () => {
      try {
        const matter = await MatterService.getById(id);
        setCourse(matter);
      } catch (error) {
        console.error('Erro ao obter a materia:', error);
        toast.error('Erro ao obter a materia!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          }
        );
      }
  };

  return (
    <>
    <NavBar/>
    <div className={styles.body}>
      <Card className={styles.infos}>
        <div className={styles.row}>
          <h4>Informações gerais</h4>
        </div>
        <div className={styles.row}>
          <h2>{course.name}</h2>
          <h3>{course.series}</h3>
        </div>
      </Card>
      <ToastContainer />
    </div>
    </>
  )
}

export default Course
