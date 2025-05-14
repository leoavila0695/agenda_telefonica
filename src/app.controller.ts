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
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import { IContacto } from './contactos.interface';
import { CrearContactoDto } from './dtos/crear-contacto.dto';
import { plainToInstance } from 'class-transformer';
import { ContactoCreadoDto } from './dtos/contacto-creado.dto';
import { MostrarRegistrosParamsDto } from './dtos/x';
import { ListaContactosDto } from './dtos/lista_contactos.dto';
import { PersonasModels } from './models/personas.models';
import { PersonaRepository } from './repositories/persona.repository';
import { ActualizarContactoDto } from './dtos/actualizar-contacto.dto';
import { Multer } from 'multer';
import { CargaModels } from './models/carga.models';

@Controller('api/v1/contactos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('subir')
  @UseInterceptors(FileInterceptor('archivo'))
  async subirArchivo(@UploadedFile() archivo: Multer.File, @Res() res) {
    if (!archivo) {
      return res.status(400).json({ mensaje: 'No se envio ningun archivo.' });
    }
    const cargaId = uuidv4();
    res
      .status(202)
      .json({ cargaId, mensaje: 'Archivo recibido, procesando...' });
    await this.appService.procesarArchivo(archivo, cargaId);
  }

  @Get('/estado-carga/:carga')
  async estadoCarga(@Param('cargaId') cargaId: string) {
    const carga = await CargaModels.findByPk(cargaId);
    if (!carga) {
      throw new HttpException('Carga no encontrada', HttpStatus.NOT_FOUND);
    }
    return { cargaId, estado: carga.estado };
  }

  @Get('/previsualizar-carga/:cargaId')
  async previsualizarCarga(@Param('cargaId') cargaId: string) {
    return this.appService.previsualizarCarga(cargaId);
  }

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
  ): Promise<any> /*: IContacto[]*/ {
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
