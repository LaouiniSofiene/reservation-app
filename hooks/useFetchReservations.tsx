'use client';

import { useEffect, useState } from "react"
import { IReservation } from "../typings";


export const useFetchReservations = (value: Date) => {

    const [selectedDateReservations, setSelectedDateReservations] = useState<IReservation[]>([])
    
    const storedData = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    const reservations = storedData.find((reservation: IReservation) => reservation.date == value.toLocaleDateString())
    
    const fetchReservation = () => {
        if(reservations && reservations.reservations){
            setSelectedDateReservations(reservations.reservations)
        } else{
            setSelectedDateReservations([])
        }
    }
    
    useEffect(() => {
        fetchReservation()
    }, [value,storedData.length])

    console.log(selectedDateReservations)
    
    return selectedDateReservations

}