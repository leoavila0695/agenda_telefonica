import { ValidationError } from 'class-validator';

export function formatearErroresValidacion(errores: ValidationError[]): string[] {
  const mensajesValidaciones: string[] = [];

  errores.forEach(error => {
    // Verificar si error.constraints está definido antes de acceder a sus propiedades
    if (error.constraints) {
      // Si whitelistValidation existe, modificar el mensaje en español
      if (error.constraints.whitelistValidation) {
        error.constraints.whitelistValidation = `${error.property} no es una propiedad permitida.`;
      }
      
      // Obtener los mensajes de error y agregarlos al array
      const constraints = Object.values(error.constraints);
      mensajesValidaciones.push(...constraints);
    }

    // Revisar validaciones anidadas
    if (error.children && error.children.length > 0) {
      mensajesValidaciones.push(...formatearErroresValidacion(error.children));
    }
  });

  return mensajesValidaciones;
}
