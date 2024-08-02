import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ToolsModule } from './tools/tools.module';
import { Tool } from './tools/entities/tool.entity';
import { MechanicsModule } from './mechanics/mechanics.module';
import { Mechanic } from './mechanics/entities/mechanic.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [Tool, Mechanic, User],
      host: process.env.POSTGRES_HOST,
      database: 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    ToolsModule,
    MechanicsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }