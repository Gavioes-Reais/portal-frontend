import React from 'react'

import { Link } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import styles from './MaterialCard.module.css'

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} color='warning' />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const MaterialCard = ({id, title, series, percentage_completed, img}) => {
  return (
    <Card className={styles.card}>
      <Link to={`/course/${id}`} className={styles.link}>
      <CardMedia
        component="img"
        image={img}
        alt="curso imagem"
        className={styles.image}
      />
      <CardContent className={styles.conteudo}>
        <div>
          <span>{series}</span>
          <h4>
            {title}
          </h4>
        </div>
        <LinearProgressWithLabel value={percentage_completed} />
      </CardContent>
      </Link>
    </Card> 
  )
}

export default MaterialCard
