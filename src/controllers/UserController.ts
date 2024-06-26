import { Request, Response } from 'express';
import { UserService } from '../services/UserService';



export class UserController {
    createUser  = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body;

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Nome obrigatorio' })
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado' })
    }
    getAllUsers = (request: Request, response: Response) =>{
        const userService = new UserService()

        const users = userService.getAllUsers()
        return response.status(200).json( users )
    }
}