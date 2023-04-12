export enum EGender {
  male = 'male',
  female = 'female'
}

export interface IUserFB {
  username: string
  gender: EGender
}

export interface IUser extends IUserFB {
  id: string
}
