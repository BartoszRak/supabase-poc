
export interface User {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    role?: string
}


export interface UserEntity {
    id: string,
    firstName: string,
    lastName: string,
}