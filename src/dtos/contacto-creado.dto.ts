import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ContactoCreadoDto{
    @Expose({name:"primerNombre"})
    primer_nombre:string;

    segundoNombre:string;

    
    primerApellido:string;
    
    segundoApellido:string;
    
    documento: string;
    
    telefono: string;

    @Exclude()
    id;

}