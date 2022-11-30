'use client';

import { useEffect, useState } from "react"


export const useFetchReservations = (value) => {

    const [selectedDateReservations, setSelectedDateReservations] = useState<Object[]>([])
    const reservations = JSON.parse(window.localStorage.getItem('Reservations') || '[]')

    const fetchReservation = () => {
        reservations.map((reservation) => {
            if(new Date(reservation.date).toDateString() === value.toDateString()){
                setSelectedDateReservations(oldArray => [...oldArray, reservation])
            }
            else{
                setSelectedDateReservations([])
            }
        })
    }
    
    useEffect(() => {
        fetchReservation()
    }, [value])
    
    return selectedDateReservations

}