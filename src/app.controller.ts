import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IContacto } from './contactos.interface';
import { CrearContactoDto } from './dtos/crear-contacto.dto';
import { plainToInstance } from 'class-transformer';
import { ContactoCreadoDto } from './dtos/contacto-creado.dto';
import { MostrarRegistrosParamsDto } from './dtos/x';
import { ListaContactosDto } from './dtos/lista_contactos.dto';
import { PersonasModels } from './models/personas.models';

@Controller('api/v1/contactos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  mostrarContactos(
    @Query() parametros: MostrarRegistrosParamsDto,
  ) /*: IContacto[] */ {
    const { pagina, numeroDeContactos } = parametros;
    const contactos = this.appService.mostrarContactos(
      pagina,
      numeroDeContactos,
    );
    return plainToInstance(ListaContactosDto, contactos);
  }

  @Get('/:contactoId')
  obtenerContacto(@Param('contactoId') contactoId: string) /*: IContacto*/ {
    const id = Number(contactoId);
    if (isNaN(id)) {
      throw new Error('este ID no es un numero valido');
    }
    const contacto = this.appService.obtenerContacto(id);
    if (!contacto) {
      throw new Error('Contacto no encontrado');
    }
    return contacto;
  }

  @Delete('/:contactoId')
  eliminarContacto(@Param('contactoId') contactoId: number) /*: IContacto[]*/ {
    console.log(typeof contactoId);
    if (!Number(contactoId)) {
      throw new HttpException(
        'este ID no es un numero',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.appService.eliminarContacto(Number(contactoId));
  }

  @Post()
  crearContacto(@Body() nuevoContacto: CrearContactoDto): ContactoCreadoDto {
    const contacto = this.appService.crearContacto(nuevoContacto as IContacto);
    return plainToInstance(ContactoCreadoDto, contacto);
  }

  @Put('/:contactoId')
  actualizarContacto(
    @Param('contactoId') contactoId: string,
    @Body() datosActualizados: IContacto,
  ): IContacto {
    const id = Number(contactoId);
    if (isNaN(id)) {
      throw new Error('El ID no es un numero valido');
    }
    const contactoActualizado = this.appService.actualizarContacto(
      id,
      datosActualizados,
    );
    if (!contactoActualizado) {
      throw new Error('Contacto no encontrado');
    }
    return contactoActualizado;
  }
}
