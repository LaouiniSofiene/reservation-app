'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react"
import { useAddReservation } from "../hooks/useAddReservation";


interface TimeSlot {
  id: number,
  value : string
}

interface Inputs{
  name : string,
  startHour : TimeSlot,
  endHour : TimeSlot,
}


interface IReservation  {
  name: string,
  startHour: TimeSlot,
  endHour : TimeSlot,
  date : string
}

function Form({ date } : {date : Date}) {

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<number[]>([])
  const [selectedStartHour, setSelectedStartHour] = useState(0)
  const [selectedEndHour, setSelectedEndHour] = useState(1)
  

  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ name }) => {
    useAddReservation({name : name,startHour: timeSlots[selectedStartHour], endHour: timeSlots[selectedEndHour], date})
  }

  const handleStartHour = (e: any) => {
    setSelectedStartHour(e.target.value);
  }

  const handleEndHour = (e: any) => {
    setSelectedEndHour(e.target.value);
  }

  const isDisabled = (timeSlot : TimeSlot, hour : string) => {
    if(hour === "start"){
      return selectedTimeSlots.find((slot) => slot === timeSlot.id) != undefined ? true : false 
    } else {
      return timeSlot.id <= selectedStartHour || selectedTimeSlots.find((slot) => slot === timeSlot.id ) != undefined ? true : false 
    }
  }



  useEffect(() => {
    //call for check empty hours hook according to given date
    setTimeSlots([{id: 0, value: "9:00"}, {id: 1, value: "10:00"}, {id: 2, value: "11:00"}, {id: 3, value: "12:00"}, {id: 4, value: "13:00"}, {id: 5, value: "14:00"}, {id: 6, value: "15:00"}, {id: 7, value: "16:00"}, {id: 8, value: "17:00"}, {id: 9, value: "9:00"}, {id: 10, value: "10:00"}, {id: 11, value: "11:00"}])
    const storedData = JSON.parse(window.localStorage.getItem('Reservations') || '[]')
    const reservations = storedData.find((reservation: IReservation) => reservation.date == date.toLocaleDateString())
    const selectedSlots = []

    if(reservations && reservations.reservations){
      for(let reservation of reservations.reservations){
        for (let index = reservation.startHour.id; index <= reservation.endHour.id; index++) {
          selectedSlots.push(index)
        }
      }
    }
    setSelectedTimeSlots(selectedSlots)
  }, [date])

  
 


  return (
    <div>
        <p className="text-black text-3xl font-semibold">Please fill the form to make a reservation</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              {...register("name", {required: true})}
            />
            <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting hour</label>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("startHour", {required: true})}
              onChange={handleStartHour}
              value={selectedStartHour}
            >
              {
                timeSlots.map((timeSlot) => (
                  <option disabled={isDisabled(timeSlot,"start")} key={timeSlot.id} value={timeSlot.id}>{timeSlot.value}</option>
                ))
              }
            </select>
            <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending hour</label>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("endHour", {required: true})}
              onChange={handleEndHour}
              value={selectedEndHour}
            >
               {
                timeSlots.map((timeSlot) => (
                  <option disabled={isDisabled(timeSlot,"end")} key={timeSlot.id} value={timeSlot.id}>{timeSlot.value}</option>
                ))
              }
            </select>

            <button type="submit" className="ml-auto mt-5 text-white bg-[#56697F] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-5/12">Confirm Reservation</button>
        </form>
    </div>
  )
}

export default Form