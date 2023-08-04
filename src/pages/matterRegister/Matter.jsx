import React from 'react'
import { useState } from 'react'

import MatterService from '../../services/MattService';

import NavBar from '../../components/Navbar/NavBar'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Matter.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateMatter = () => {
    const [name, setName] = useState('');
    const [series, setSeries] = useState('');
    const [img_url, setImg_url] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setName('')
        setSeries('')
        setImg_url('')
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleSeriesChange = (e) => {
        setSeries(e.target.value);
    };

    const handleImg_urlChange = (e) => {
        setImg_url(e.target.value);
    };

    function validando(name, series, img_url){
        let retornaErro = false;
    
        if (name === null || name.length === 0) {
          toast.error('O nome é obrigatório!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
          );
          retornaErro = true;
        }
        if (series === null || series.length === 0) {
          toast.error('A serie é obrigatória!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
          );
          retornaErro = true;
        }
        if (img_url === null || img_url.length === 0) {
            toast.error('O endereço da imagem é obrigatório!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              }
            );
            retornaErro = true;
        }
        return !retornaErro;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
       
        let podeAutenticar = validando(name, series, img_url)
        console.log(podeAutenticar)
        if (!podeAutenticar) {
          return;
        }
        
        const mater = {
            name: name,
            series: series,
            img_url: img_url,
        }
        console.log(mater)

        try {
            setLoading(true)
            const createdMatter = await MatterService.create(mater);
            console.log('Matéria criada:', createdMatter);
            toast.success('Matéria Criada com sucesso!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }
            );
            setTimeout(() => {
                window.location.assign("/home");
            }, 3001)
        } catch (error) {
            console.error('Erro ao criar matéria:', error);
            toast.error('Falha ao criar matéria!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }
            );
        } finally {
            setLoading(false)
        } 
      }

    return (
        <>
        <NavBar/>
        <div className={styles.body}>
        <Card className={styles.infos}>
            <div className={styles.row}>
                <h2>Cadastre a Matéria</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row_input}>
                    <TextField 
                    id="name" 
                    type="text" 
                    label="Nome da matéria" 
                    variant="outlined" 
                    color="warning"
                    className={styles.input} 
                    value={name}
                    onChange={handleNameChange}
                    />
                </div>
                <div className={styles.row_input}>
                    <TextField 
                    id="serie" 
                    type="text" 
                    label="Serie da turma" 
                    variant="outlined" 
                    color="warning"
                    className={styles.input} 
                    value={series}
                    onChange={handleSeriesChange}
                    />
                </div>
                <div className={styles.row_input}>
                    <TextField 
                    id="url" 
                    type="url" 
                    label="Url da imagem" 
                    variant="outlined" 
                    color="warning"
                    className={styles.input} 
                    value={img_url}
                    onChange={handleImg_urlChange}
                    />
                </div>
                <div className={styles.row_input}>
                {loading ? (
                    <div className={styles.row_load}>
                        <CircularProgress color="warning" disabled/>
                    </div>
                ) : (
                    <div className={styles.row_input}>
                        <Button 
                        type="reset" 
                        variant="outlined" 
                        color="warning"
                        className={styles.button}
                        onClick={handleCancel}
                        >Cancelar
                        </Button>
                        <Button 
                        type="submit" 
                        variant="contained" 
                        color="warning"
                        className={styles.button}
                        >Salvar
                        </Button>
                    </div>
                )}  
                </div>
            </form>
        </Card>
        </div>
        <ToastContainer />
        </>
    )
}

export default CreateMatter
