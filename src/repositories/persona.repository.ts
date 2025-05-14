import { PersonasModels } from 'src/models/personas.models';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IContacto } from 'src/contactos.interface';

export class PersonaRepository {
  public static async buscarPersonaPorId(id: number) {
    return await PersonasModels.findByPk(id);
  }

  public static async obtenerContactos() {
    return await PersonasModels.findAndCountAll();
  }

  public static async crearPersona(persona: Partial<IContacto>) {
    return await PersonasModels.create(persona);
  }

  public static async eliminarPersonaPorId(id: number) {
    const persona = await PersonasModels.findByPk(id);
    if (persona) {
      await persona.destroy();
    }
    return persona;
  }

  public static async actualizarPersonaPorId(
    id: number,
    datosActualizados: Partial<IContacto>,
  ) {
    const persona = await PersonasModels.findByPk(id);
    if (persona) {
      await persona.update(datosActualizados);
    }
    return persona;
  }
}
