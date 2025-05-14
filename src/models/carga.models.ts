import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'cargas', timestamps: true, paranoid: false })
export class CargaModels extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, field: 'id' })
  declare id: string;

  @Column({ type: DataType.STRING, field: 'estado', allowNull: false })
  estado: string;
}
