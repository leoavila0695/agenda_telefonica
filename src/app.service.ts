import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IContacto } from './contactos.interface';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  mostrarContactos(): IContacto[] {
    return AppRepository.mostrarContactos();
  }

  obtenerContacto(idContacto : number): IContacto {
    const contacto = AppRepository.obtenerContacto(idContacto);
    if (!contacto){
      throw new HttpException ('este contacto no existe',HttpStatus.NOT_FOUND)
    }
    return contacto;
  }


  eliminarContacto(idContacto : number): IContacto[]{
    this.obtenerContacto(idContacto);
    return AppRepository.eliminarContacto(idContacto);
  }


  crearContacto(nuevoContacto: IContacto): IContacto {
    return AppRepository.crearContacto(nuevoContacto);
  }

  actualizarContacto(id: number, datosActualizados: IContacto): IContacto | undefined {
    try{
      return AppRepository.actualizarContacto(id, datosActualizados);
    } catch(error){
      console.error({error})
    }
  }

}


