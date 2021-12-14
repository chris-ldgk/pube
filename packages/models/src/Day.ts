import { Exercise } from "./Exercise";

export type DayExerciseDataReps = { sets: number; reps: number | "5+" };

export type DayExerciseDataDuration = {
  duration: number;
};

export type DayExercise = {
  exercise: Exercise;
  content?: DayExerciseDataReps | DayExerciseDataDuration;
};

export type Day = {
  AM: DayExercise[];
  PM: DayExercise[];
  Throughout: DayExercise[];
};
