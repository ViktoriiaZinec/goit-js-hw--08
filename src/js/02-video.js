import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const localStorageKey = 'videoplayer-current-time';

player.on('loaded', () => {
  const currentTime = localStorage.getItem(localStorageKey) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(localStorageKey, seconds);
  }, 1000)
);
