import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Constantes } from 'src/constantes';

export class CrearContactoDto {
  @IsNotEmpty({ message: Constantes.CAMPO_OBLIGATORIO })
  @IsString({ message: Constantes.SOLO_STRING })
  @Expose({ name: 'primer_nombre' })
  primerNombre: string;

  @IsOptional()
  @Expose({ name: 'segundo_nombre' })
  segundoNombre: string;

  @IsNotEmpty({ message: Constantes.CAMPO_OBLIGATORIO })
  @Expose({ name: 'primer_apellido' })
  primerApellido: string;

  @IsNotEmpty({ message: Constantes.CAMPO_OBLIGATORIO })
  @Expose({ name: 'segundo_apellido' })
  segundoApellido: string;

  @IsNotEmpty({ message: Constantes.CAMPO_OBLIGATORIO })
  documento: string;

  @IsNotEmpty({ message: Constantes.CAMPO_OBLIGATORIO })
  telefono: string;
}
