import { Exercise } from '.';

export type DayExercise = {
  exercise: Exercise;
  content?:
    | { sets: number; reps: number | '5+' }
    | {
        duration: number;
      };
};

export type Day = {
  AM: DayExercise[];
  PM: DayExercise[];
  Throughout: DayExercise[];
};
