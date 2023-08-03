import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MatterService from '../../services/MattService';

import NavBar from '../../components/Navbar/NavBar'

import styles from './Course.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
  let { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetchMatters();
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
    <div className={styles.body}>
      <NavBar/>
      <h1>{course.name}</h1>
      <ToastContainer />
    </div>
  )
}

export default Course
