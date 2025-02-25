import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CrearContactoDto{
    @IsNotEmpty({message:"Este campo es obligatorio "})
    @IsString({message:"Solo letras "})
    @Expose({name:"primer_nombre"})
    primerNombre:string;

    @IsOptional()
    segundoNombre:string;

    @IsNotEmpty({message:"Este campo es obligatorio "})
    primerApellido:string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    segundoApellido:string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    documento: string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    telefono: string;

}