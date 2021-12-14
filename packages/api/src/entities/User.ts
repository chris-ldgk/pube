import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { LogEntry } from ".";
import { Program } from "./Program";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Program)
  @JoinColumn()
  program: Program;

  @OneToMany(() => LogEntry, (logEntry) => logEntry.user)
  log: LogEntry[];
}
