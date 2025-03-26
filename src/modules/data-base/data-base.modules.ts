import { Module } from '@nestjs/common';
import { dataBaseProvider } from './database.providers';
import { PersonasModels } from 'src/models/personas.models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [...dataBaseProvider], //*para trabajar postgres*//
  exports: [...dataBaseProvider],
})
export class DataBaseModules {}
