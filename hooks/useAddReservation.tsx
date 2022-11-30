import { useCallback, useState } from "react"

interface Props {
    name : string, 
    startHour : string, 
    endHour : string,
    date : object
}

export const useAddReservation = ({name, startHour, endHour, date} : Props) => {

    window.localStorage.setItem('Reservations', JSON.stringify({name : name, startHour: startHour, endHour : endHour, date : date})) 

}