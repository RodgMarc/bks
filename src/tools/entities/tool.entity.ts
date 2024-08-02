import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tools')
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome_da_ferramenta', nullable: true })
  name: string;

  @Column({ name: 'tipo', nullable: true })
  category: string;

  @Column({ name: 'numero_de_serie', nullable: true })
  serialNumber: string;

  @Column({ name: 'observacao', nullable: true })
  obs: string;
}
