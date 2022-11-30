interface Data {
  name : string,
  startHour: string,
  endHour : string
}

function Reservation({name, startHour, endHour} : Data) {
  return (
    <div>
        <div className="flex">
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{name}</p>
            <p className="block mx-2 mb-2 text-xl font-medium text-gray-900 dark:text-white">-</p>
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">10 AM</p>
            <p className="block mx-2 mb-2 text-xl font-medium text-gray-900 dark:text-white">&#8594;</p>
            <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">11 AM</p>
        </div>
    </div>
    
  )
}

export default Reservation