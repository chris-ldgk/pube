import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { DayExercise } from "./DayExercise";
import { Program } from "./Program";

@Entity()
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => DayExercise, (dayExercise) => dayExercise.dayAm)
  AM: DayExercise[];

  @OneToMany(() => DayExercise, (dayExercise) => dayExercise.dayPm)
  PM: DayExercise[];

  @OneToMany(() => DayExercise, (dayExercise) => dayExercise.dayThroughout)
  Throughout: DayExercise[];

  @ManyToOne(() => Program, (program) => program.days)
  program: Program;
}
