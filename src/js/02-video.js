import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const onPlay = function (evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(currentTime);
