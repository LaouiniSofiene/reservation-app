'use client';

import { useEffect, useState } from "react"

interface TimeSlot {
    id: number,
    value : string
}

interface IReservation  {
    name: string,
    startHour: TimeSlot,
    endHour : TimeSlot,
    date : string
}

export const useFetchReservations = (value: Date) => {

    const [selectedDateReservations, setSelectedDateReservations] = useState<IReservation[]>([])
    
    const storedData = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    const reservations = storedData.find((reservation: IReservation) => reservation.date == value.toLocaleDateString())
    
    const fetchReservation = () => {
        if(reservations && reservations.reservations){
            for (const reservation of reservations.reservations) {
                setSelectedDateReservations(oldArray => [...oldArray, reservation])
            }
        } else{
            setSelectedDateReservations([])
        }
    }
    
    useEffect(() => {
        fetchReservation()
    }, [value,storedData.length])

    
    return selectedDateReservations

}