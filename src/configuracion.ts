import * as dotenv from "dotenv"
dotenv.config()
export class Configuracion {
    static readonly DB_HOST= process.env.DB_HOST
    static readonly DB_PUERTO= Number(process.env.DB_PUERTO)
    static readonly DB_NOMBRE= process.env.DB_NOMBRE
    static readonly DB_PASS = process.env.DB_PASS
    static readonly DB_USUARIO= process.env.DB_USUARIO
}