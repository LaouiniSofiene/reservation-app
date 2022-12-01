export interface TimeSlot {
    id: number,
    value : string
}

export interface IReservation  {
    name: string,
    startHour: TimeSlot,
    endHour : TimeSlot,
    date : string
}
  