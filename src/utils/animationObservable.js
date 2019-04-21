import { defer, interval, animationFrameScheduler } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export const duration = (ms, schedule = animationFrameScheduler) => {
  return defer(() => {
    const start = schedule.now();
    return interval(0, schedule).pipe(
      map(() => schedule.now() - start),
      map(deltaMS => deltaMS / ms),
      takeWhile(deltaMS => deltaMS <= 1)
    );
  });
};

export const distance = d => percent => d * percent;
// ref: https://gist.github.com/rezoner/713615dabedb59a15470
export const circOut = t => {
  return Math.sqrt(1 - --t * t);
};
