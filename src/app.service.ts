import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IContacto } from './contactos.interface';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  mostrarContactos(pagina: number = 1, nContactos: number = 10): IContacto[] {
    const contactos = AppRepository.mostrarContactos();
    const indexInicial = (pagina - 1) * nContactos;
    const indexFinal = indexInicial + nContactos;
    return contactos.slice(indexInicial, indexFinal);
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


