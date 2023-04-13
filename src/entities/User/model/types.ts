export enum EGender {
  male = 'male',
  female = 'female'
}

export interface IUserFB {
  username: string
  gender: EGender
  email: string
  phone?: string
  avatar?: string
}

export interface IUser extends IUserFB {
  id: string
}
