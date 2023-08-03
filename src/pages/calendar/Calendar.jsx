import React, { useState, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import styles from './Calendar.module.css';
import NavBar from '../../components/Navbar/NavBar';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeriados = async (ano) => {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar feriados');
      }
      const data = await response.json();
      const formattedEvents = formatFeriados(data);
      setEvents(formattedEvents);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const formatFeriados = (feriados) => {
    return feriados.map(feriado => ({
      tipo: feriado.type,
      data: feriado.date,
      nome: feriado.name,
    })
    );
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    fetchFeriados(currentYear);
  });

  const dateCellRender = (value) => {
    const formattedDate = value.format('YYYY-MM-DD');
    const eventsOnThisDate = events.filter(event => event.data === formattedDate);

    return (
      <ul className="events">
        {eventsOnThisDate.map((event, index) => (
          <li key={index}>
            <Badge status="success" text={`${event.nome} - ${event.data}`} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.full_view}>
      <NavBar />
      <div className={styles.container}>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Calendar
            cellRender={dateCellRender}
            className={styles.calendar}
          />
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
