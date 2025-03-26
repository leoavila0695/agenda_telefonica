import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { Constantes } from 'src/constantes';

export class MostrarRegistrosParamsDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: Constantes.SOLO_ADMITE_NUMEROS })
  @Min(1, { message: 'El valor minimo es 1' })
  pagina: number = 1;

  @IsOptional()
  @Expose({ name: 'numeros_contactos' })
  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: Constantes.SOLO_ADMITE_NUMEROS })
  numeroDeContactos: number = 10;
}
