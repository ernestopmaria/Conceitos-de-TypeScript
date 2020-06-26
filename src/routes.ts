import {Request, Response} from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request:Request, response:Response){

    const user = createUser( {
        email:'ernestom11',
        password:'2152gm',
        techs:['NodeJS', 'Javascript' , {title:'Angular', experience:10}]
    });
    return response.json({message: 'Hello World'})
}