import { JsonController, Get, Post, Body, Param } from "routing-controllers";
import { App } from "infra/App";
import PersonService from "./PersonService";
import {IPerson } from "./PersonType";

@JsonController("/person")  // выносим сюда base url
export default class Person{
  public app = new App();
  public service = new PersonService();

  // get запрос
  @Get()
  async getAll() {
    return this.service.getAll();
  }
   @Get("/:id")
  async getOne(@Param('id')id:number) {
    return this.service.getOne(id);
  }


// post запрос
  @Post("/postHello")
  async setPerson(@Body() body:IPerson) {
    await this.service.setPerson(body);
    return 'Person added';
}
}





//*   Get and Post only
// import { JsonController, Get, Post, Body } from "routing-controllers";
// import { App } from "infra/App";
// import PersonService from "./PersonService";
// import {IPerson } from "./PersonType";

// @JsonController("/person")  // выносим сюда base url
// export default class Person{
//   public app = new App();
//   public service = new PersonService();

//   // get запрос
//   @Get("/getHello")
//   async getHello() {
//     return "Hello Person";
//   }

// // post запрос
//   @Post("/postHello")
//   async setPerson(@Body() body:IPerson) {
//     await this.service.setPerson(body);
//     return 'Person added';
// }
// }

