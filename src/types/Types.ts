export interface User {
    readonly id: string,
    readonly email: string,
    readonly isActive: boolean,
    userName?: string,
    birthdate?: string,
    location?: string,
}

export interface Remark {
    readonly id: string
    readonly email: string,
    latitude: number,
    longitude: number,
    remark: string
}