import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { ConfigModule } from './config/config.module'
import { ConfigService } from "./config/config.service"
import { Configuration } from './config/config.keys'
const fs = require("fs");
export class OrmConfig {
   
   config: ConfigService;
   // Config TypeOrm
   getConfig() {
      const ormConfig: TypeOrmModuleOptions = {
         type: 'mysql',
         host: this.config.get(Configuration.HOST) || '34.176.218.118',
         port: Number(this.config.get(Configuration.PORT)) || 3306,
         username: this.config.get(Configuration.USERNAME) || 'root',
         password: this.config.get(Configuration.PASSWORD) || 'infinitytech',
         database: this.config.get(Configuration.DATABASE) || 'red_salud',
         entities: ['dist/**/*.entity{.js,.ts}'],
         synchronize: false,
         migrationsRun: true,
         logging: false,
         logger: 'file',
         migrations: ['dist/src/database/migrations/**/*{.js, .ts}'],
         cli: { migrationsDir: 'database/migrations' },
         ssl: true,
         extra: {
            // ssl: true
            ssl: {
               ca: fs.readFileSync('./src/config/server-ca.pem').toString(),
               cert: fs.readFileSync('./src/config/client-cert.pem').toString(),
               key: fs.readFileSync('./src/config/client-key.pem').toString(),
               rejectUnauthorized: false
            }
         }
      }
      return ormConfig
   }
}
export default new OrmConfig().getConfig()