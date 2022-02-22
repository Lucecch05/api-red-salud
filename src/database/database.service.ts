import { TypeOrmModule } from "@nestjs/typeorm"
import { ConnectionOptions } from "typeorm"
import { ConfigModule } from '../config/config.module'
import { ConfigService } from "../config/config.service"
import { Configuration } from '../config/config.keys'

export const databaseProviders = [
   TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      async useFactory(config: ConfigService){
         return {
            type: 'mysql' as 'mysql',
            ssl: false,
            synchronize: true,
            host: config.get(Configuration.HOST),
            username: config.get(Configuration.USERNAME),
            password: config.get(Configuration.PASSWORD),
            port: parseInt(config.get(Configuration.DATABASE_PORT)),
            database: config.get(Configuration.DATABASE),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/migrations/*{.ts,.js}'],
         } as ConnectionOptions
      }
   })
]