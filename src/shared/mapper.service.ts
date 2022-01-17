import { Injectable } from "@nestjs/common";
import { Afiliado } from "src/modules/afiliado/afiliado.entity";
import { Detalle_Afiliado } from "src/modules/afiliado/detalle_afilliado.entity";
import { AfiliadoDto } from "src/modules/afiliado/dto/afiliado.dto";
import { Detalle_AfiliadoDto } from "src/modules/afiliado/dto/detalle_afiliado.dto";
import { Barrio } from "src/modules/barrio/barrio.entity";
import { BarrioDto } from "src/modules/barrio/dto/barrio.dto";
import { Caja } from "src/modules/caja/caja.entity";
import { CajaDto } from "src/modules/caja/dto/caja.dto";
import { Historial_CajaDto } from "src/modules/caja/dto/historial_caja.dto";
import { Historial_Caja } from "src/modules/caja/historial_caja.entity";
import { Cobrador } from "src/modules/cobrador/cobrador.entity";
import { CobradorDto } from "src/modules/cobrador/dto/cobrador.dto";
import { Descuento } from "src/modules/descuento/descuento.entity";
import { DescuentoDto } from "src/modules/descuento/dto/descuento.dto";
import { EspecialidadDto } from "src/modules/especialidad/dto/especialidad.dto";
import { Especialidad } from "src/modules/especialidad/especialidad.entity";
import { LocalidadDto } from "src/modules/localidad/dto/localidad.dto";
import { Localidad } from "src/modules/localidad/localidad.entity";
import { OrdenDto } from "src/modules/orden/dto/orden.dto";
import { Orden } from "src/modules/orden/orden.entity";
import { PersonaDto } from "src/modules/persona/dto/persona.dto";
import { Persona } from "src/modules/persona/persona.entity";
import { PlanDto } from "src/modules/plan/dto/plan.dto";
import { Plan } from "src/modules/plan/plan.entity";
import { PrestacionDto } from "src/modules/prestacion/dto/prestacion.dto";
import { Prestacion } from "src/modules/prestacion/prestacion.entity";
import { PrestadorDto } from "src/modules/prestador/dto/prestador.dto";
import { Prestador } from "src/modules/prestador/prestador.entity";
import { RazonDto } from "src/modules/razon/dto/razon.dto";
import { Razon } from "src/modules/razon/razon.entity";
import { ReciboDto } from "src/modules/recibo/dto/recibo.dto";
import { Recibo } from "src/modules/recibo/recibo.entity";
import { RolDto } from "src/modules/role/dto/role.dto";
import { Rol } from "src/modules/role/role.entity";
import { UserDto } from "src/modules/user/dto/user.dto";
import { User } from "src/modules/user/user.entity";
import { VendedorDto } from "src/modules/vendedor/dto/vendedor.dto";
import { Vendedor } from "src/modules/vendedor/vendedor.entity";
import { TypeMapper } from "ts-mapper";

@Injectable()
export class MapperService extends TypeMapper {

    constructor(){
        super();
        this.config();
    }

    private config(): void{
        this.createMap<User, UserDto>()
        .map(entity => entity.id, dto => dto.id)
        .map(entity => entity.username, dto => dto.username)
        .map(entity => entity.rol, dto => dto.rol)

        this.createMap<Rol,RolDto>()
        .map(entity => entity.id_rol, dto => dto.id_rol)
        .map(entity => entity.descripcion, dto => dto.descripcion)

        this.createMap<Vendedor,VendedorDto>()
        .map(entity => entity.id_vendedor, dto => dto.id_vendedor)
        .map(entity => entity.nombre, dto => dto.nombre)
        .map(entity => entity.apellido, dto => dto.apellido)
        .map(entity => entity.telefono, dto => dto.telefono)

        this.createMap<Recibo,ReciboDto>()
        .map(entity => entity.id_recibo, dto => dto.id_recibo)
        .map(entity => entity.anio_recibo, dto => dto.anio_recibo)
        .map(entity => entity.mes_recibo, dto => dto.mes_recibo)
        .map(entity => entity.fecha_cobro, dto => dto.fecha_cobro)
        .map(entity => entity.fecha_creacion, dto => dto.fecha_creacion)
        .map(entity => entity.historial_caja, dto => dto.historial_caja)
        .map(entity => entity.afiliado, dto => dto.afiliado)

        this.createMap<Razon,RazonDto>()
        .map(entity => entity.id_razon, dto => dto.id_razon)
        .map(entity => entity.descripcion, dto => dto.descripcion)

        this.createMap<Prestador,PrestadorDto>()
        .map(entity => entity.id_prestador, dto => dto.id_prestador)
        .map(entity => entity.proveedor, dto => dto.proveedor)
        .map(entity => entity.formato, dto => dto.formato)
        .map(entity => entity.nombre_medico, dto => dto.nombre_medico)
        .map(entity => entity.horario, dto => dto.horario)
        .map(entity => entity.domicilio, dto => dto.domicilio)
        .map(entity => entity.telefono, dto => dto.telefono)
        .map(entity => entity.monto_red_salud, dto => dto.monto_red_salud)
        .map(entity => entity.importe, dto => dto.importe)
        .map(entity => entity.especialidad, dto => dto.especialidad)
        .map(entity => entity.prestaciones, dto => dto.prestaciones)
        
        this.createMap<Prestacion,PrestacionDto>()
        .map(entity => entity.codigo_prestacion, dto => dto.codigo_prestacion)
        .map(entity => entity.descripcion, dto => dto.descripcion)
        .map(entity => entity.prestadores, dto => dto.prestadores)

        this.createMap<Plan,PlanDto>()
        .map(entity => entity.id_plan, dto => dto.id_plan)
        .map(entity => entity.descripcion, dto => dto.descripcion)
        .map(entity => entity.precio, dto => dto.precio)

        this.createMap<Persona,PersonaDto>()
        .map(entity => entity.id_persona, dto => dto.id_persona)
        .map(entity => entity.num_afiliado, dto => dto.num_afiliado)
        .map(entity => entity.nombre, dto => dto.nombre)
        .map(entity => entity.apellido, dto => dto.apellido)
        .map(entity => entity.fecha_creacion, dto => dto.fecha_creacion)
        .map(entity => entity.dni, dto => dto.dni)
        .map(entity => entity.parentesco, dto => dto.parentesco)
        .map(entity => entity.carencia, dto => dto.carencia)
        .map(entity => entity.activo, dto => dto.activo)
        .map(entity => entity.ordenes, dto => dto.ordenes)
        .map(entity => entity.afiliado, dto => dto.afiliado)

        this.createMap<Orden,OrdenDto>()
        .map(entity => entity.id_orden, dto => dto.id_orden)
        .map(entity => entity.tipo, dto => dto.tipo)
        .map(entity => entity.fecha_creacion, dto => dto.fecha_creacion)
        .map(entity => entity.persona, dto => dto.persona)
        .map(entity => entity.prestador, dto => dto.prestador)

        this.createMap<Localidad,LocalidadDto>()
        .map(entity => entity.id_localidad, dto => dto.id_localidad)
        .map(entity => entity.nombre, dto => dto.nombre)
        .map(entity => entity.barrios, dto => dto.barrios)

        this.createMap<Especialidad,EspecialidadDto>()
        .map(entity => entity.id_especialidad, dto => dto.id_especialidad)
        .map(entity => entity.descripcion, dto => dto.descripcion)

        this.createMap<Descuento,DescuentoDto>()
        .map(entity => entity.id_descuento, dto => dto.id_descuento)
        .map(entity => entity.importe, dto => dto.importe)
        .map(entity => entity.porcentaje, dto => dto.porcentaje)
        .map(entity => entity.caducidad, dto => dto.caducidad)
        .map(entity => entity.observacion, dto => dto.observacion)

        this.createMap<Cobrador,CobradorDto>()
        .map(entity => entity.id_cobrador, dto => dto.id_cobrador)
        .map(entity => entity.nombre, dto => dto.nombre)
        .map(entity => entity.apellido, dto => dto.apellido)
        .map(entity => entity.telefono, dto => dto.telefono)

        this.createMap<Caja,CajaDto>()
        .map(entity => entity.id_caja, dto => dto.id_caja)
        .map(entity => entity.total, dto => dto.total)
        .map(entity => entity.usuario, dto => dto.usuario)
        .map(entity => entity.historiales_caja, dto => dto.historiales_caja)

        this.createMap<Historial_Caja,Historial_CajaDto>()
        .map(entity => entity.id_historial_caja, dto => dto.id_historial_caja)
        .map(entity => entity.accion, dto => dto.accion)
        .map(entity => entity.importe, dto => dto.importe)
        .map(entity => entity.fecha, dto => dto.fecha)
        .map(entity => entity.afiliado, dto => dto.afiliado)
        .map(entity => entity.razon, dto => dto.razon)
        .map(entity => entity.caja, dto => dto.caja)

        this.createMap<Barrio,BarrioDto>()
        .map(entity => entity.id_barrio, dto => dto.id_barrio)
        .map(entity => entity.descripcion, dto => dto.descripcion)
        .map(entity => entity.localidad, dto => dto.localidad)

        this.createMap<Afiliado,AfiliadoDto>()
        .map(entity => entity.id_afiliado, dto => dto.id_afiliado)
        .map(entity => entity.fecha_creacion, dto => dto.fecha_creacion)
        .map(entity => entity.fecha_venta, dto => dto.fecha_venta)
        .map(entity => entity.fecha_cobro, dto => dto.fecha_cobro)
        .map(entity => entity.importe, dto => dto.importe)
        .map(entity => entity.estado, dto => dto.estado)
        .map(entity => entity.detalle, dto => dto.detalle)
        .map(entity => entity.descuento, dto => dto.descuento)
        .map(entity => entity.cobrador, dto => dto.cobrador)
        .map(entity => entity.vendedor, dto => dto.vendedor)
        .map(entity => entity.plan, dto => dto.plan)
        .map(entity => entity.personas, dto => dto.personas)
        .map(entity => entity.recibos, dto => dto.recibos)

        this.createMap<Detalle_Afiliado,Detalle_AfiliadoDto>()
        .map(entity => entity.id_detalle, dto => dto.id_detalle)
        .map(entity => entity.calle, dto => dto.calle)
        .map(entity => entity.numero, dto => dto.numero)
        .map(entity => entity.observacion, dto => dto.observacion)
        .map(entity => entity.barrio, dto => dto.barrio)
        .map(entity => entity.afiliado, dto => dto.afiliado)
    }
}