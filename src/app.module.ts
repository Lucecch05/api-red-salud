import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { AfiliadoModule } from './modules/afiliado/afiliado.module';
import { PersonaModule } from './modules/persona/persona.module';
import { BarrioModule } from './modules/barrio/barrio.module';
import { LocalidadModule } from './modules/localidad/localidad.module';
import { DescuentoModule } from './modules/descuento/descuento.module';
import { CobradorModule } from './modules/cobrador/cobrador.module';
import { VendedorModule } from './modules/vendedor/vendedor.module';
import { PlanModule } from './modules/plan/plan.module';
import { CajaModule } from './modules/caja/caja.module';
import { RazonModule } from './modules/razon/razon.module';
import { ReciboModule } from './modules/recibo/recibo.module';
import { PrestadorModule } from './modules/prestador/prestador.module';
import { PrestacionModule } from './modules/prestacion/prestacion.module';
import { EspecialidadModule } from './modules/especialidad/especialidad.module';
import { OrdenModule } from './modules/orden/orden.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RoleModule, AfiliadoModule, PersonaModule, BarrioModule, LocalidadModule, DescuentoModule, CobradorModule, VendedorModule, PlanModule, CajaModule, RazonModule, ReciboModule, PrestadorModule, PrestacionModule, EspecialidadModule, OrdenModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static port: number | string;

  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);
  }

}
