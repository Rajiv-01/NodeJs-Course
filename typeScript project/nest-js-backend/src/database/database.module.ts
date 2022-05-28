import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'dev',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'nestjsdb',
      entities: ['dist/**/entities/*{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
