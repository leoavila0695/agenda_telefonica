import { PersonasModels } from 'src/models/personas.models';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IContacto } from 'src/contactos.interface';

export class PersonaRepository {
  public static async buscarPersonaPorId(id: number) {
    const persona = await PersonasModels.findByPk(id);

    if (!persona) {
      throw new HttpException(
        'No se encontro una persona con el ID: ${id}',
        HttpStatus.NOT_FOUND,
      );
    }
    return await persona;
  }

  public static async obtenerContactos(limite: number, paginaActual: number) {
    return await PersonasModels.findAndCountAll({
      limit: limite,
      offset: (paginaActual - 1) * limite,
    });
  }

  public static async crearPersona(persona: {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    documento: string;
    telefono: string;
  }) {
    return await PersonasModels.create(persona);
  }

  public static async eliminarPersonaPorId(id: number): Promise<string> {
    const persona = await PersonasModels.findByPk(id);
    if (!persona) {
      throw new HttpException(
        'No se encontro una persona con el ID: ${id}',
        HttpStatus.NOT_FOUND,
      );
    }
    await persona.destroy();
    return 'la persona con ID ${id} ha sido eliminada exitosamente';
  }

  public static async actualizarPersonaPorId(
    id: number,
    datosActualizados: IContacto,
  ): Promise<string> {
    const persona = await PersonasModels.findByPk(id);
    if (!persona) {
      throw new HttpException(
        'No se encontro una persona con el ID: ${id}',
        HttpStatus.NOT_FOUND,
      );
    }
    await persona.update(datosActualizados);
    return 'el contacto con el ID: ${id} ha sido actualizada exitosamente.';
  }
}
