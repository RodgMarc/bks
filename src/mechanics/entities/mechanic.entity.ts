import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mechanics')
export class Mechanic {
    
    //Colunas
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'nome'})
    name: string;  

    @Column({name:'funcao'})
    role: string; 

}


