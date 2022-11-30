'use client';

import styled from 'styled-components';
import '../styles/globals.css'
import Calendar from 'react-calendar'
import { useState } from 'react';
import Form from '../components/Form';
import Reservation from '../components/Reservation';
import { useFetchReservations } from '../hooks/useFetchReservations';

function homePage() {
  const [value, onChange] = useState(new Date());

  const tileDisabled = ({ date } : {date : Date}) => {
    return date < new Date((new Date()).valueOf() - 1000*3600*24) || date.getDay() === 0 || date.getDay() === 6
  }
  
  console.log(useFetchReservations({value}))

  return (
    <div className="flex main-container flex-col gap-10">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Welcome back !
        </h1>
      </div>
      <div>
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="flex-1 w-full">
            <CalendarContainer>
              <Calendar onChange={onChange} tileDisabled={tileDisabled} value={value} />
            </CalendarContainer>
          </div>
          <div className="flex-1 mt-5 rounded-md bg-card p-5">
            <div>
                <p className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white border-b-4 border-[#56697F] pb-2">Reservation for Date DD/MM/YYYY</p>
            </div>
            <Reservation />
            <Reservation />
            <Reservation />
            <Reservation />
          </div>
          <div className="flex-1 mt-5 rounded-md bg-card p-5">
            <Form date={value} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default homePage

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100%;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.35);
  padding: 10px;
  border-radius: 3px;

  
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
    button {
      margin: 3px;
      background-color: #56697F;
      border: 0;
      border-radius: 3px;
      color: white;
      padding: 5px 0;
      &:hover {
        background-color: #000000;
        color : #ffffff;
      }
      &:active {
        background-color: #a5c1a5;
      }
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #c5a7d1;
    border: 0;
    border-radius: 3px;
    color: #ffffff;
    padding: 5px 0;
    &:hover {
      background-color: #000000;
      color : #ffffff;
    }
    &:active {
      background-color: #56697F;
      color : #ffffff;
    }
    &:disabled {
      color : #cfccc6;
    }
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
      background-color: #56697F;
      color : #ffffff;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;