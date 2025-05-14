import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
@Table({ tableName: 'personas', timestamps: false, paranoid: false })
export class PersonasModels extends Model {
  // @AutoIncrement
  // @PrimaryKey
  // @Column({ type: DataType.INTEGER, field: 'id' })
  // id: number;
  @Column({ type: DataType.STRING, field: 'primer_nombre' })
  primerNombre: string;

  @Column({ type: DataType.STRING, field: 'segundo_nombre', allowNull: false })
  segundoNombre: string;

  @Column({ type: DataType.STRING, field: 'primer_apellido' })
  primerApellido: string;

  @Column({
    type: DataType.STRING,
    field: 'segundo_apellido',
    allowNull: false,
  })
  @Column({ type: DataType.INTEGER, field: 'documento', unique: true })
  documento: string;

  @Column({ type: DataType.INTEGER, field: 'telefono' })
  telefono: string;

  @AllowNull(true)
  @Column({ type: DataType.DATE, field: 'deleted_at' })
  declare deletedAt: Date;
}
