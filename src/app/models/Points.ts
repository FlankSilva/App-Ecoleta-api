import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('points')
class Points {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  whatsapp: string

  @Column()
  latitude: string

  @Column()
  longitude: string

  @Column()
  city: string

  @Column()
  uf: string

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date

}

export default Points