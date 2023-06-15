// app делаем через синглтоне/через статическую переменную
// это что бы App два раза не вызывался
// так же делаем и в Tcp.ts

import { Tcp } from "./Tcp";
import { IService } from "../types/serves";
export class App implements IService {
  private static instance: App;

  private tcp: IService = new Tcp();

  constructor() {
    if (!App.instance) {
      App.instance = this;
    }
    return App.instance;
  }
  async init() {
    const { tcp } = this;
    console.log("App started");
    await tcp.init();
    return true;
  }
}
