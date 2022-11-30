import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react"
import { useAddReservation } from "../hooks/useAddReservation";



interface Inputs{
  name : string,
  startHour : string,
  endHour : string,
}

function Form({ date } : {date : Date}) {

  const [startTimeSlots, setStartTimeSlots] = useState<string[]>([])
  const [endTimeSlots, setEndTimeSlots] = useState<string[]>([])

  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ name, startHour, endHour }) => {
      useAddReservation({name, startHour, endHour, date})
      console.log(window.localStorage.getItem('Reservations'))
  }

  useEffect(() => {
    //call for check empty hours hook according to given date
    setStartTimeSlots(["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"])

  }, [date])

  useEffect(() => {
    //call for check empty hours hook according to given date
    setEndTimeSlots(["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"])
    
  }, [startTimeSlots])
  


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
            >
              {
                startTimeSlots.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                ))
              }
            </select>
            <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending hour</label>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("endHour", {required: true})}
            >
               {
                endTimeSlots.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                ))
              }
            </select>

            <button type="submit" className="ml-auto mt-5 text-white bg-[#56697F] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-5/12">Confirm Reservation</button>
        </form>
    </div>
  )
}

export default Form