import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    //Colunas
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome' })
    name: string;

    @Column({ name: 'senha' })
    password: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'url_foto' })
    photoUrl: string;

    @Column({ name: 'url_wallpaper' })
    wallpaper: string;

    @Column({ name: 'salt' })
    salt: string;

}
