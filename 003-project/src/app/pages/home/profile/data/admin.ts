export interface Admin {
    id: number,
    imgUrl: string,
    firstName: string,
    lastName: string,
    role: string,
    reportingTo: string,
    corporateLevel: number
    vacationRequests: number
    leaveRequests: number
    lifeTime: number
    vacationDayLeft: number
    sickDayLeft: number
}