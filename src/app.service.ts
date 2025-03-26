import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IContacto } from './contactos.interface';
import { AppRepository } from './app.repository';
import { PersonaRepository } from './repositories/persona.repository';
import { PersonasModels } from './models/personas.models';

@Injectable()
export class AppService {
  async mostrarContactos(
    pagina: number = 1,
    nContactos: number = 10,
  ): Promise<IContacto[]> {
    return await PersonaRepository.obtenerContactos(pagina, nContactos);
  }

  async obtenerContacto(idContacto: number): Promise<PersonasModels> {
    const contacto = await PersonasModels.findByPk(idContacto);
    if (!contacto) {
      throw new HttpException('este contacto no existe', HttpStatus.NOT_FOUND);
    }
    return contacto;
  }

  eliminarContacto(idContacto: number): IContacto[] {
    this.obtenerContacto(idContacto);
    return AppRepository.eliminarContacto(idContacto);
  }

  async crearContacto(nuevoContacto: IContacto): Promise<any> {
    const contacto = await PersonaRepository.crearPersona(nuevoContacto);
    return contacto.dataValues;
  }

  async actualizarContacto(
    id: number,
    datosActualizados: IContacto,
  ): Promise<PersonasModels> {
    const contacto = await this.obtenerContacto(id);
    if (!contacto) {
      throw new HttpException(
        'No se encontro el contacto',
        HttpStatus.NOT_FOUND,
      );
    }
    await contacto.update(datosActualizados);
    return contacto;
  }
}
