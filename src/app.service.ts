import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IContacto } from './contactos.interface';
import { AppRepository } from './app.repository';
import { PersonaRepository } from './repositories/persona.repository';
import { PersonasModels } from './models/personas.models';
import { ActualizarContactoDto } from './dtos/actualizar-contacto.dto';
import { Multer } from 'multer';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import { CargaModels } from './models/carga.models';

@Injectable()
export class AppService {
  async procesarArchivo(archivo: Multer.File, cargaId: string) {
    console.log(`Procesando archivo con ID: ${cargaId}`);

    await CargaModels.create({ id: cargaId, estado: 'pendiente' });

    if (!archivo.originalname.endsWith('.xlsx')) {
      console.log('El archivo no es un Excel.');
      await CargaModels.update({ estado: 'error' }, { where: { id: cargaId } });
      return;
    }
    const rutaArchivo = `uploads/${archivo.filename}`;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(rutaArchivo);

    const hoja = workbook.worksheets[0];
    const datos: Array<{
      primer_nombre: string;
      segundo_nombre: string;
      primer_apellido: string;
      segundo_apellido: string;
      documento: string;
      telefono: string;
    }> = [];

    hoja.eachRow((fila, rowNumber) => {
      if (rowNumber === 1) return;
      const valores = Array.isArray(fila.values) ? fila.values.slice(1) : [];
      if (valores.length < 7) {
        console.log(`Fila ${rowNumber} incompleta, se omitirá.`);
        return;
      }
      datos.push({
        primer_nombre: valores[0]?.toString().trim() || '',
        segundo_nombre: valores[1]?.toString().trim() || '',
        primer_apellido: valores[2]?.toString().trim() || '',
        segundo_apellido: valores[3]?.toString().trim() || '',
        documento: valores[4]?.toString().trim() || '',
        telefono: valores[5]?.toString().trim() || '',
      });
    });

    try {
      console.log(
        'Datos a insertar en la base de datos: ',
        JSON.stringify(datos, null, 2),
      );
      await PersonasModels.bulkCreate(datos);
      console.log('Datos insertados correctamente.');
    } catch (error) {
      console.log('Error al insertar los datos: ', error.message, error.stack);
      throw new Error('Error al insertar datos en la base de datos');
    }
    console.log('Datos extraidos del Excel: ', datos);

    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`Archivo ${archivo.originalname} procesado correctamente.`);
  }

  async previsualizarCarga(cargaId: string): Promise<any[]> {
    const rutaArchivo = `uploads/${cargaId}.xlsx`;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(rutaArchivo);

    const hoja = workbook.worksheets[0];
    const datos: Array<{
      primer_nombre: string;
      segundo_nombre: string;
      primer_apellido: string;
      segundo_apellido: string;
      documento: string;
      telefono: string;
    }> = [];

    hoja.eachRow((fila, rowNumber) => {
      if (rowNumber === 1) return;
      const valores = Array.isArray(fila.values) ? fila.values.slice(1) : [];

      datos.push({
        primer_nombre: valores[0]?.toString().trim() || '',
        segundo_nombre: valores[1]?.toString().trim() || '',
        primer_apellido: valores[2]?.toString().trim() || '',
        segundo_apellido: valores[3]?.toString().trim() || '',
        documento: valores[4]?.toString().trim() || '',
        telefono: valores[5]?.toString().trim() || '',
      });
    });
    return datos;
  }

  async mostrarContactos(pagina: number = 1, nContactos: number = 10) {
    return await PersonasModels.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      limit: nContactos,
      offset: (pagina - 1) * nContactos,
      order: [['id', 'ASC']],
    });
  }

  async obtenerContacto(idContacto: number): Promise<PersonasModels> {
    const contacto = await PersonaRepository.buscarPersonaPorId(idContacto);
    if (!contacto) {
      throw new HttpException('este contacto no existe', HttpStatus.NOT_FOUND);
    }
    return contacto;
  }

  async eliminarContacto(idContacto: number): Promise<string> {
    const contacto = await PersonaRepository.eliminarPersonaPorId(idContacto);
    if (!contacto) {
      throw new HttpException(
        `No se encontró un contacto con ID ${idContacto}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return `El contacto con ID ${idContacto} ha sido eliminado.`;
  }

  async crearContacto(nuevoContacto: IContacto): Promise<PersonasModels> {
    return await PersonaRepository.crearPersona(nuevoContacto);
  }

  async actualizarContacto(
    id: number,
    datosActualizados: ActualizarContactoDto,
  ): Promise<PersonasModels> {
    const contacto = await this.obtenerContacto(id);
    await contacto.update(datosActualizados);
    return contacto;
  }
}
