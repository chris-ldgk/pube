import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Exercise } from "./Exercise";
import { DayExerciseDataReps, DayExerciseDataDuration } from "@pube/models";
import { Day } from "./Day";

@Entity()
export class DayExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Exercise)
  @JoinColumn()
  exercise: Exercise;

  @Column()
  content?: string;

  @ManyToOne(() => Day, (day) => day.AM)
  dayAm?: Day;

  @ManyToOne(() => Day, (day) => day.PM)
  dayPm?: Day;

  @ManyToOne(() => Day, (day) => day.Throughout)
  dayThroughout?: Day;
}
