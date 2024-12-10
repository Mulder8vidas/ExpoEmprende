export interface LoginAuthModel {
  username: string|null
  password: string|null

}
export interface RegisterAuthModel {
  username: string
  password: string
  email: string
  names: string
  lastName: string
  phone: string
  carrera: string
}
export interface TokenModel{
  token:string
}
export interface CurrentUserModel {
  sub: string
  role: string
  iss: string
  USER: string
  exp: number
  iat: number
  modules: string
  email: string
}
