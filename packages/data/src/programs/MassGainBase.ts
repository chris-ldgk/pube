import { t } from 'ttag';
import {
  BenchPress,
  Curls,
  Deadlift,
  FastedWalking,
  FrequencyChins,
  FrequencyPushUps,
  NeckHarness,
  Press,
  Squat,
  WeightedChins,
} from '../exercises';
import { Program } from '@pube/models';

export const MassGain: Program = {
  id: 'MassGain',
  name: t`Mass Gain with Strength and Hyptertrophy focus`,
  description: t`A lifting program made to gain mass and strength.`,
  days: [
    {
      AM: [
        {
          exercise: FastedWalking,
          content: { duration: 30 },
        },
      ],
      PM: [
        {
          exercise: Press,
          content: {
            sets: 3,
            reps: '5+',
          },
        },
        {
          exercise: WeightedChins,
          content: { sets: 2, reps: 8 },
        },
        {
          exercise: Squat,
          content: {
            sets: 3,
            reps: '5+',
          },
        },
        {
          exercise: NeckHarness,
          content: {
            sets: 4,
            reps: 25,
          },
        },
      ],
      Throughout: [
        { exercise: FrequencyChins },
        { exercise: FrequencyPushUps },
      ],
    },
    {
      AM: [{ exercise: FastedWalking, content: { duration: 30 } }],
      PM: [],
      Throughout: [
        { exercise: FrequencyChins },
        { exercise: FrequencyPushUps },
      ],
    },
    {
      AM: [{ exercise: FastedWalking, content: { duration: 30 } }],
      PM: [
        {
          exercise: BenchPress,
          content: { sets: 3, reps: '5+' },
        },
        {
          exercise: Curls,
          content: {
            sets: 2,
            reps: 15,
          },
        },
        {
          exercise: Deadlift,
          content: {
            sets: 1,
            reps: '5+',
          },
        },
        {
          exercise: NeckHarness,
          content: {
            sets: 4,
            reps: 25,
          },
        },
      ],
      Throughout: [
        { exercise: FrequencyChins },
        { exercise: FrequencyPushUps },
      ],
    },
    {
      AM: [{ exercise: FastedWalking, content: { duration: 30 } }],
      PM: [],
      Throughout: [
        { exercise: FrequencyChins },
        { exercise: FrequencyPushUps },
      ],
    },
  ],
};
