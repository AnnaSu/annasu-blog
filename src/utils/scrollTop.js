import { circOut, duration, distance } from './animationObservable';
import { map } from 'rxjs/operators';

export default function scrollTop() {
  duration(300)
    .pipe(
      map(circOut),
      map(percent => 1 - percent),
      map(distance(window.scrollY))
    )
    .subscribe(d => window.scrollTo(0, d), null, () => {
      window.scrollTo(0, 0);
    });
}
