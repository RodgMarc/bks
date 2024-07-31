import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('tools')
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;  


  @Column({name:'nome'})
  name: string;

  @Column({name:'senha'})
  password: string;
}
