import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import MatterService from '../../services/MattService';

import NavBar from '../../components/Navbar/NavBar'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';

import styles from './Course.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    fetchMatters();

    // Obtenha as informações do usuário autenticado, por exemplo, a role do usuário
    // e armazene em userRole.
    // Para este exemplo, vou assumir a role do usuário como '2'.
    setUserRole(2);
  }, []);

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
          {userRole === 2 &&(
            <Link to={`/matter/edit/${id}`}>
              <Button type="button" variant="outlined" color="warning">Editar</Button>
            </Link>
          )}
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
