export interface UserType {
    readonly id: string,
    readonly email: string,
    readonly isActive: boolean,
    userName?: string,
    birthdate?: string,
    location?: string,
}

export interface RemarkType {
    readonly id: string
    readonly email: string | null,
    latitude: number,
    longitude: number,
    remark: string
}