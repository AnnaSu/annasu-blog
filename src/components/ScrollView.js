import { Component } from 'react';
import { observeOn, map } from 'rxjs/operators';
import { Subject, fromEvent, animationFrameScheduler } from 'rxjs';

class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.scroll$ = new Subject().pipe(
      observeOn(animationFrameScheduler),
      map(() => window.pageYOffset || document.documentElement.scrollTop)
    );
  }

  componentDidMount() {
    fromEvent(window, 'scroll').subscribe(
      () => this.scroll$.next(),
      err => this.scroll$.error(err),
      () => this.scroll$.complete()
    );
  }

  render() {
    return this.props.children(this.scroll$);
  }
}

export default ScrollView;
