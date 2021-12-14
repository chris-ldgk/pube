import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  increment?: number;
}
