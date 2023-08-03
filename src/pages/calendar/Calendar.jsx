import React from 'react';
import { Calendar, Badge } from 'antd';

import styles from './Calendar.module.css'

import NavBar from '../../components/Navbar/NavBar';

const EventCalendar = () => {
  const events = [
    { title: 'Reunião', date: '2023-08-26', time: '14:00', type: 'warning', },
    { title: 'Prova', date: '2023-08-28', time: '18:30', type: 'error', },
  ];

  const dateCellRender = (value) => {
    const formattedDate = value.format('YYYY-MM-DD');
    const eventsOnThisDate = events.filter(event => event.date === formattedDate);

    return (
      <ul className="events">
        {eventsOnThisDate.map((event, index) => (
          <li key={index}>
            <Badge status={`${event.type}`} text={`${event.title} - ${event.time}`} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.full_view}>
      <NavBar/>
      <div className={styles.container}>
      <Calendar
        cellRender={dateCellRender}
        className={styles.calendar}
      />
      </div>
    </div>
  );
};

export default EventCalendar;
