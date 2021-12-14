import { LogEntry } from '.';

export type User = {
  programId?: string;
  remindersSetup?: boolean;
  amTime?: string;
  amNotifs?: boolean;
  pmTime?: string;
  pmNotifs?: boolean;
  workoutNotifs?: boolean;
  log?: LogEntry[];
};
