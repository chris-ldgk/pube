import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Day } from "./Day";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Day, (day) => day.program)
  days: Day[];
}
