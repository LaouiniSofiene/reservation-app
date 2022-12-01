import { useEffect, useState } from "react"
import { IReservation } from "../typings"



function Reservation({name, startHour, endHour, date} : IReservation) {

  const [nextDay, setNextDay] = useState("")
  const nextDayIds = [9,10,11]
  const options = { weekday: 'long' }
  const reservationDay = new Date(date)


  const checkEndHour = () => {
    if(nextDayIds.includes(endHour.id)){
      reservationDay.setDate(reservationDay.getDate() + 1)
      setNextDay(reservationDay.toLocaleDateString('en-US',{ weekday: 'long' }))
    }

  }


  useEffect(() => {
   checkEndHour()
  })
  

  return (
    <div className="bg-reservation p-2 my-2 rounded-md">
        <div className="flex">
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{name}</p>
            <p className="block mx-2 mb-2 text-xl font-medium text-gray-900 dark:text-white">-</p>
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{startHour.value}</p>
            <p className="block mx-2 mb-2 text-xl font-medium text-gray-900 dark:text-white">&#8594;</p>
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{nextDay ? nextDay + " At " + endHour.value : endHour.value}</p>
        </div>
    </div>
    
  )
}

export default Reservation