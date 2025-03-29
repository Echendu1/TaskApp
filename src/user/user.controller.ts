import { injectable } from "inversify";

@injectable()

export class UserController {
    constructor() {  }

  public getUser() {
    return {
        title: "This is a title",
        description: "Task des"
    }
  }


} 