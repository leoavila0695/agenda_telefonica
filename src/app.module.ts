import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModules } from './modules/data-base/data-base.modules';

@Module({
  imports: [DataBaseModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
