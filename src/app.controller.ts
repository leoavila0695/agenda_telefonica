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
import { PersonaRepository } from './repositories/persona.repository';
import { ActualizarContactoDto } from './dtos/actualizar-contacto.dto';

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
  async obtenerContacto(
    @Param('contactoId') contactoId: string,
  ) /*: IContacto*/ {
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
  async eliminarContacto(
    @Param('contactoId') contactoId: string,
  ): Promise<string> /*: IContacto[]*/ {
    const id = Number(contactoId);
    if (isNaN(id)) {
      throw new HttpException(
        'este ID no es un numero valido aca',
        HttpStatus.BAD_REQUEST,
      );
    }
    return PersonaRepository.eliminarPersonaPorId(id);
  }

  @Post()
  crearContacto(@Body() nuevoContacto: CrearContactoDto): ContactoCreadoDto {
    const contacto = this.appService.crearContacto(nuevoContacto as IContacto);
    return plainToInstance(ContactoCreadoDto, contacto);
  }

  @Put('/:contactoId')
  async actualizarContacto(
    @Param('contactoId') contactoId: string,
    @Body() datosActualizados: ActualizarContactoDto,
  ): Promise<PersonasModels> {
    const id = Number(contactoId);

    if (isNaN(id)) {
      throw new HttpException(
        'El ID no es un numero valido',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.appService.actualizarContacto(id, datosActualizados);
  }
}
