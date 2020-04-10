import React from 'react';
import Wrapper from './Wrapper';
import '@storybook/addon-console';

const playerSize = { width: '640px', height: '500px' };

export default {
  title: 'Wrapper',
  component: Wrapper,
};
export const Vimeo = () =>  (
    <Wrapper
        style={playerSize}
        url='https://player.vimeo.com/video/401140696'
    ></Wrapper>
);

export const YouTube = () => (
    <Wrapper
        style={playerSize}
        url="https://www.youtube.com/watch?v=EZpSzV45vqM"
    ></Wrapper>
);

export const GenericSource = () => (
    <Wrapper
        style={playerSize}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    ></Wrapper>
);
