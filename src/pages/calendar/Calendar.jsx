import React from 'react';

import styles from './Calendar.module.css'

import NavBar from '../../components/Navbar/NavBar';

import { Badge, Calendar } from 'antd';
import Card from '@mui/material/Card';

const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'error',
            content: 'Encerramento de trimestre',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'success',
            content: 'Palestra',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'Prova',
          },
        ];
        break;
      default:
    }
    return listData || [];
};

const getMonthData = (value) => {
    //exemplo de aviso por mes
    if (value.month() === 8) {
      return 1394;
    }
};

function CalendarComp() {

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>recados do mes</span>
          </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <div className={styles.full_view}>
            <NavBar/>
            <Card className={styles.container}>                       
                <Calendar 
                onPanelChange={onPanelChange} 
                cellRender={cellRender}
                className={styles.calendar} 
                />
            </Card>
        </div>
    );
}

export default CalendarComp

