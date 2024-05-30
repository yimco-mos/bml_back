import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './configorm';


//este archivo funciona como un
//provider poara database module


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
