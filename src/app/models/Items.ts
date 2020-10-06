import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('items')
class Items {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  title: string
}

export default Items

