

export const useFetchReservations = (value) => {

    const reservations = window.localStorage.getItem('Reservations')
    

    return JSON.parse(reservations || '{}')

}