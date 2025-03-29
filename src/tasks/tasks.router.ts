import { Router, Request, Response } from "express";
import { TasksController} from "./tasks.controller";
import { injectable, inject } from "inversify";
import { IPartialTaskWithId, ITask } from "./task.interface";

export const tasksRouter: Router = Router();



@injectable()

export class TasksRouter {
    public router: Router;

    constructor(@inject(TasksController) private tasksController: TasksController) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get("/", 
            async (req: Request, res: Response)=> {
            const allTask = await this.tasksController.handleGetTasks(req, res)
            res.json(allTask);
        })

        this.router.post(
            "/create", 
            async (req: Request<{}, {}, ITask>, res: Response)=> {
            const newTask = await this.tasksController.handlePostTasks(req, res);
            res.json(newTask);
        })
    
        this.router.patch("/update", 
            async(req: Request<{}, {}, IPartialTaskWithId>, res: Response)=> {
            const updatedTask = await this.tasksController.handlePatchTasks(req, res)
            res.json(updatedTask);
        })
    }

}