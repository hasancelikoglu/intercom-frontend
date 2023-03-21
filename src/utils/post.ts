export const generateDate = (date: string) => {
    const newDate = new Date(date)
    const dmy = newDate.toLocaleDateString('tr', { weekday: "long", month: "short", day: "numeric" })
    const time = newDate.toLocaleTimeString('tr', { hour: "2-digit", minute: "2-digit" })
    
    return dmy + " " + time
}