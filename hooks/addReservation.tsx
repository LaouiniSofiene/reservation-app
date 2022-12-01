'use client';

import { IReservation, TimeSlot } from "../typings";


interface Props {
    name : string, 
    startHour : TimeSlot, 
    endHour : TimeSlot,
    date : Date
}


export const addReservation = ({name, startHour, endHour, date} : Props) => {

    const reservations = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    const currentReservation = reservations.find((reservation: IReservation) => reservation.date === date.toLocaleDateString())
    if(currentReservation){
        if(!currentReservation.reservations.find((reservation: IReservation) => reservation.name === name)){
            currentReservation.reservations.push({name : name, startHour: startHour, endHour : endHour, date : date})
        }
    } else {
        reservations.push(
            {
                date: date.toLocaleDateString(),
                reservations: [{name : name, startHour: startHour, endHour : endHour, date : date}]
            }
        )
    }
   
    window.localStorage.setItem('Reservations', JSON.stringify(reservations))
    window.location.reload()
}