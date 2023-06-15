export interface IService{
  init(): Promise<boolean>;  // с помощью промиса указываем что он асинхронный
}