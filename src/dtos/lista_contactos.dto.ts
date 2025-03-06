import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class ListaContactosDto{


    id;

    @Expose({name:"primerNombre"})
    @IsString()
    primer_nombre:string;

    @Expose({name:"segundoNombre"})
    @IsString()
    segundo_nombre:string;

    @Expose({name:"primerApellido"})
    @IsString()
    primer_apellido:string;
    
    @Expose({name:"segundoApellido"})
    @IsString()
    segundo_apellido:string;

}