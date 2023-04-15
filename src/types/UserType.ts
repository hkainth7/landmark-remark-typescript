export interface User {
    readonly id: string,
    readonly email: string,
    readonly isActive: boolean,
    userName?: string,
    birthdate?: string,
    location?: string,
}
