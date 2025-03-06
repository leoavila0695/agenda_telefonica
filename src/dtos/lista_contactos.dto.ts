import { Expose } from "class-transformer";

export class ListaContactosDto{


    id;

    @Expose({name:"primerNombre"})
    primer_nombre:string;

    @Expose({name:"segundoNombre"})
    segundo_nombre:string;

    @Expose({name:"primerApellido"})
    primer_apellido:string;
    
    @Expose({name:"segundoApellido"})
    segundo_apellido:string;

}