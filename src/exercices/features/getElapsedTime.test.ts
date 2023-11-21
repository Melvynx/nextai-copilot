// FILEPATH: /Users/melvynx/BRAIN/1.PROJECTS/NextAI/code/copilot-app-demo/src/exercices/tests/calculateDateDifference.test.ts
import { getElapsedTime } from '../features/getElapsedTime';

describe('getElapsedTime', () => {
  it('should return correct elapsed time in seconds', () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() - 45);
    expect(getElapsedTime(date)).toBe('45s');
  });

  it('should return correct elapsed time in minutes and seconds', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);
    date.setSeconds(date.getSeconds() - 30);
    expect(getElapsedTime(date)).toBe('5m 30s');
  });

  it('should return correct elapsed time in hours, minutes and seconds', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);
    date.setMinutes(date.getMinutes() - 30);
    date.setSeconds(date.getSeconds() - 15);
    expect(getElapsedTime(date)).toBe('2h 30m 15s');
  });

  it('should return correct elapsed time in days, hours, minutes and seconds', () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    date.setHours(date.getHours() - 2);
    date.setMinutes(date.getMinutes() - 30);
    date.setSeconds(date.getSeconds() - 15);
    expect(getElapsedTime(date)).toBe('3d 2h 30m 15s');
  });
});
