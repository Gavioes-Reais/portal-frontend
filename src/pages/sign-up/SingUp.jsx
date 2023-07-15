import React from 'react'
import { useState } from 'react'

import styles from './SingUp.module.css'

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



const roles = [
  {
    name: 'Estudante',
    value: 1,
  },
  {
    name: 'Professor(a)',
    value: 2,
  },
];

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [datebirth, setDatebirth] = useState('');
  const [cpf, setCPF] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleCpfChange(e) {
    let cpfDigitado = e.target.value;
    cpfDigitado = cpfDigitado.replace(/\D/g, '');
    cpfDigitado = cpfDigitado.substring(0, 11);
    cpfDigitado = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCPF(cpfDigitado);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateBirthChange = (e) => {
    setDatebirth(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = {
      name: name,
      email: email,
      cpf: cpf,
      birthDate: datebirth,
      role: role,
      password: password
    }
    console.log(person)
  }
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h1>Cadastre</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <TextField 
              id="name" 
              type="text" 
              label="Nome completo" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
              value={name}
              onChange={handleNameChange}
            />
            <TextField 
              id="email" 
              type="email" 
              label="Email" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.dataNascimento}>
              <label>Data de Nascimento</label>
              <TextField 
                id="datebirth" 
                type="date" 
                variant="outlined" 
                color="warning"
                value={datebirth}
                onChange={handleDateBirthChange}
              /> 
            </div> 
            <TextField 
              id="cpf" 
              type="text" 
              label="CPF" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
              value={cpf}
              onChange={handleCpfChange}
            />   
          </div>
          <div className={styles.row}>
            <div className={styles.role}>
              <label>Cadastrar-se como</label>
              <TextField
                id="role"
                select
                color="warning"
                placeholder='Cadastrar-se como'
                className={styles.input}
                value={role}
                onChange={handleRoleChange}
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField> 
            </div>
            
          </div>
          <div className={styles.row}>
            <TextField 
              id="password" 
              type="password" 
              label="Senha" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField 
              id="confirm_password" 
              type="password" 
              label="Confirme sua senha" 
              variant="outlined" 
              color="warning"
              className={styles.input} 
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <Button type="submit" variant="contained" className={styles.button} color="warning">Entrar</Button>
        </form>
      </Card>
    </div>
  )
}

export default SingUp