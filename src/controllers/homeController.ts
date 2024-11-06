import { Request, Response } from 'express';
import { usuario } from '../models/user';



export const home = async (req: Request, res: Response)=>{

    let usuarios = await usuario.findAll()

    console.log("Usuarios: ",JSON.stringify(usuarios))

    res.render('pages/home',{
        usuarios
    });
};