export interface Iuser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IuserWithId extends Iuser{
  id: number
}