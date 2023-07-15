import React from 'react'

import styles from './SingUp.module.css'

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const cor_racas = [
  {
    value: 'Branco',
  },
  {
    value: 'Preto',
  },
  {
    value: 'Amarela',
  },
  {
    value: 'Indigena',
  },
  {
    value: 'Prefiro não informar'
  }
];

const sexo = [
  {
    value: 'Masculino',
  },
  {
    value: 'Feminino',
  }
];

function SingUp() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h1>Cadastre</h1>
        <form className={styles.form}>
          <div className={styles.row}>
            <TextField 
              id="name" 
              type="text" 
              label="Nome completo" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
            />
            <TextField 
              id="email" 
              type="email" 
              label="Email" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
            />
          </div>
          <div className={styles.row}>
            <TextField 
              id="rg" 
              type="text" 
              label="RG" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
            />
            <TextField 
              id="cpf" 
              type="text" 
              label="CPF" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
            />   
          </div>
          <div className={styles.row}>
            <TextField 
              id="orgao-emissor" 
              type="text" 
              label="Orgão emissor" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
            />
            <div className={styles.dataNascimento}>
              <label>Data de Nascimento</label>
              <TextField 
                id="datebirth" 
                type="date" 
                variant="outlined" 
                color="warning"
              /> 
            </div>              
          </div>
          <div className={styles.row}>
            <TextField
              id="outlined-select-currency"
              select
              label="Cor/Raça"
              color="warning"
              className={styles.input}
            >
              {cor_racas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField> 
            <TextField
              id="outlined-select-currency"
              select
              label="Sexo"
              color="warning"
              className={styles.input}
            >
              {sexo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField> 
          </div>
        </form>
      </Card>
    </div>
  )
}

export default SingUp