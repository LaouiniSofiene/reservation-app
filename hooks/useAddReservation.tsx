'use client';

import { useCallback, useState } from "react"

interface TimeSlot {
    id: number,
    value : string
}

interface Props {
    name : string, 
    startHour : TimeSlot, 
    endHour : TimeSlot,
    date : Date
}

export const useAddReservation = ({name, startHour, endHour, date} : Props) => {

    const reservations = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    const currentReservation = reservations.find((reservation) => reservation.date === date.toLocaleDateString())
    if(currentReservation){
        currentReservation.reservations.push({name : name, startHour: startHour, endHour : endHour, date : date})
    } else {
        reservations.push(
            {
                date: date.toLocaleDateString(),
                reservations: [{name : name, startHour: startHour, endHour : endHour, date : date}]
            }
        )
    }
   

    window.localStorage.setItem('Reservations', JSON.stringify(reservations))

}