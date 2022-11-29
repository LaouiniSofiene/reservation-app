'use client';
import styled from 'styled-components';

import '../styles/globals.css'
import Calendar from 'react-calendar'
import { useState } from 'react';

function homePage() {
  const [value, onChange] = useState(new Date());
  const tileDisabled = ({ date }) => {
    return date < new Date() || date.getDay() === 0 || date.getDay() === 6
 }
  return (
    <div className="flex main-container flex-col gap-10">
      <div>
        <h1 className="text-5xl font-bold text-black">
            Welcome back !
        </h1>
      </div>
      <div>
      <CalendarContainer>
        <Calendar onChange={onChange} tileDisabled={tileDisabled} value={value} />
      </CalendarContainer>
      </div>
    </div>
  )
}

export default homePage

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin-top: 20px;
  background-color: #acd3ff;
  padding: 10px;
  border-radius: 3px;

  /* ~~~ calendar container styles ~~~ */
     @media (min-width: 1200px) {
      .react-calendar {
        width : 580px;
      }
     }

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
    background-color: #ffffff;
    border: 0;
    border-radius: 3px;
    color: black;
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