import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import styles from './Profile.module.css'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom';

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjri0cgNoRSFSRqYxKOKHZ_aGAFWughbhUw&usqp=CAU";

const conquitas = [
  {
    name: 'Conquist 1',
    img: 'https://camo.githubusercontent.com/93a470d9cb4e7f8116d53a6f6e9a75c57d0359af59d8efa0b966ec11099db35f/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f706169722d65787472616f7264696e616972652d64656661756c742e706e67'
  },
  {
    name: 'Conquist 2',
    img: 'https://camo.githubusercontent.com/98e693d243cde46579166501d14a9259daa92de146d9ba7d6af25255c4707974/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f7374617273747275636b2d64656661756c742e706e67'
  },
  {
    name: 'Conquist 3',
    img: 'https://camo.githubusercontent.com/d4a52cfb3181d13b7a8267394f66299c39d3c9c1da254f6beea092af1c755cca/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f70756c6c2d736861726b2d64656661756c742e706e67'
  },
  
]

const Profile = () => {
  return (
    <div className={styles.full_view}>
      <NavBar/>
      <div className={styles.view_profile}>
        <Card className={styles.profile}>
          <div className={styles.row}>
            <div className={styles.pic_profile}>
              <img src={img} alt="foto de perfil" className={styles.img} />
              <h4>Joile Junior</h4>
            </div>
            <div className={styles.achievements}>
              <Link className={styles.link}>
                <h3>Conquitas</h3>
              </Link>
              <div className={styles.achievements_list}>
              {conquitas.length > 0 &&
                conquitas.map((data) => (
                  <div className={styles.card_achievments}>
                    <img src={data.img} alt="foto de perfil" className={styles.achievements_img} />
                    <h3>{data.name}</h3>
                  </div>
                ))}
              {conquitas.length === 0 && (
                <div className={styles.not_found_actividades}>
                  <span>Nenhuma conquita desbloqueada</span>
                </div>
              )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Profile
