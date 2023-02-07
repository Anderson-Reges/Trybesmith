export interface IuserWithCredentials extends IuserWithId{
  password: string,
}

export interface IuserWithId extends Iuser{
  id: number
}

export interface Iuser {
  username: string,
  vocation: string,
  level: number,
}