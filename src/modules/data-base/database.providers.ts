import { Sequelize } from 'sequelize-typescript';
import { Configuracion } from 'src/configuracion';
import { PersonasModels } from 'src/models/personas.models';

export const tablas = [PersonasModels];
export const dataBaseProvider = [
  {
    provide: 'AGENDA_TELEFONICA',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: Configuracion.DB_HOST,
        port: Configuracion.DB_PUERTO,
        username: Configuracion.DB_USUARIO,
        password: Configuracion.DB_PASS,
        database: Configuracion.DB_NOMBRE,
      });
      sequelize.addModels(tablas);
      return sequelize;
    },
  },
];
