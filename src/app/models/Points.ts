import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import Items from './Items';

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
  latitude: number

  @Column()
  longitude: number

  @Column()
  city: string

  @Column()
  uf: string

  @ManyToMany(() => Items, { eager: true })
  @JoinTable({
    name: 'points_items',
    joinColumns: [{ name: 'id_points' }],
    inverseJoinColumns: [{name: 'id_items'}]
  })
  items: Items[]

}

export default Points