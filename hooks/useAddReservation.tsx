'use client';

import { useCallback, useState } from "react"

interface Props {
    name : string, 
    startHour : string, 
    endHour : string,
    date : object
}

export const useAddReservation = ({name, startHour, endHour, date} : Props) => {

    const reservations = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    reservations.push({name : name, startHour: startHour, endHour : endHour, date : date})

    window.localStorage.setItem('Reservations', JSON.stringify(reservations))

}