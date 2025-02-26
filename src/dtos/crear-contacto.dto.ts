import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CrearContactoDto{
    @IsNotEmpty({message:"Este campo es obligatorio "})
    @IsString({message:"Solo letras "})
    @Expose({name:"primer_nombre"})
    primerNombre:string;

    @IsOptional()
    @Expose({name:"segundo_nombre"})
    segundoNombre:string;

    @IsNotEmpty({message:"Este campo es obligatorio "})
    @Expose({name:"primer_apellido"})
    primerApellido:string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    @Expose({name:"segundo_apellido"})
    segundoApellido:string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    documento: string;
    
    @IsNotEmpty({message:"Este campo es obligatorio "})
    telefono: string;

}