import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
   private readonly envConfig: {[key: string]: string};

   constructor(){
      const isDevelopmentEnv = process.env.NODE_ENV !== "production";
      
      if(isDevelopmentEnv){
         const envFilePath = __dirname + '/../../.env';
         const existsPath = fs.existsSync(envFilePath);

         if (!existsPath) {
            console.log('env file does not exist');
            process.exit(0);
         }

         this.envConfig = parse(fs.readFileSync(envFilePath));



      }
      else{
         this.envConfig = {
            PORT: '3306',
            HOST: '34.176.218.118',
            USERNAME: 'root',
            PASSWORD: 'infinitytech',
            DATABASE: 'red_salud'
         };
      };


   }

   get(key: string): string {
      return this.envConfig[key];
   }

}

/* 
 HOST: '34.176.218.118'
USERNAME: 'root'
PASSWORD: 'infinitytech'
DATABASE: 'red_salud'
PORT: 3306
*/
