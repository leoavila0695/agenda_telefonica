import { PersonasModels } from 'src/models/personas.models';

export class PersonaRepository {
  public static async buscarPersonaPorId(id: number) {
    return await PersonasModels.findByPk(id);
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

  public async;
}
