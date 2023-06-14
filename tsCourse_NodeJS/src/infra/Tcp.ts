// app делаем через синглтоне/через статическую переменную
// это что бы App два раза не вызывался 
// так же делаем и в Tcp.ts

import { IService } from "../types/serves"

export class Tcp implements IService {
private static instance: Tcp;
constructor() {
    if (!Tcp.instance) {
      Tcp.instance = this;
    }
    return Tcp.instance;
  }


 async  init() {
    console.log("Tcp service started");
  }
}