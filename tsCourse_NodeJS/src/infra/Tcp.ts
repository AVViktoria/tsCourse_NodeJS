// app делаем через синглтоне/через статическую переменную
// это что бы App два раза не вызывался 
// так же делаем и в Tcp.ts
import "reflect-metadata";
import  express from "express";
import { useExpressServer } from "routing-controllers";


import { IService } from "../types/serves";
import { controllers } from "../app/domain";
export class Tcp implements IService {


  private routePrefix = "./api";
  private server = express();

private static instance: Tcp;
constructor() {
    if (!Tcp.instance) {
      Tcp.instance = this;
    }
    return Tcp.instance;
  }


  async init() {
    const { routePrefix, server } = this;
    useExpressServer(server, {
      routePrefix,
      controllers,
      cors: true,
      defaultErrorHandler: true,
    });

    return new Promise((resolve: any) => {
      server.listen(4000, () => {
        console.log("Tcp service started on port 4000");
        return resolve(true);
      });
    });
   
   

  }
}