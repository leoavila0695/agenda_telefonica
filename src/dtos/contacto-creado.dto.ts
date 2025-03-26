import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactoCreadoDto {
  @Expose({ name: 'primerNombre' })
  primer_nombre: string;

  @Expose({ name: 'segundoNombre' })
  segundo_nombre: string;

  @Expose({ name: 'primerApellido' })
  primer_apellido: string;

  @Expose({ name: 'segundoApellido' })
  segundo_apellido: string;

  documento: string;

  telefono: string;

  @Exclude()
  id;
}
