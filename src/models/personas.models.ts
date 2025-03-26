import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
@Table({ tableName: 'personas', timestamps: false })
export class PersonasModels extends Model {
  // @AutoIncrement
  // @PrimaryKey
  // @Column({type:DataType.INTEGER, field:"id"})
  // id: number;

  @Column({ type: DataType.INTEGER, field: 'primer_nombre' })
  primerNombre: string;

  @Column({ type: DataType.INTEGER, field: 'segundo_nombre', allowNull: false })
  segundoNombre: string;

  @Column({ type: DataType.INTEGER, field: 'primer_apellido' })
  primerApellido: string;

  @Column({
    type: DataType.INTEGER,
    field: 'segundo_apellido',
    allowNull: false,
  })
  segundoApellido: string;

  @Column({ type: DataType.INTEGER, field: 'documento', unique: true })
  documento: string;

  @Column({ type: DataType.INTEGER, field: 'telefono' })
  telefono: string;
}
