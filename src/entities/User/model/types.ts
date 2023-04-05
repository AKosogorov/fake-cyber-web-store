export interface IUserResponse {
  id: number
}

export enum EGender {
  male = 'male',
  female = 'female'
}

export interface IUser {
  id: number
  username: string
  firstName: string
  lastName: string
  gender: EGender
}
