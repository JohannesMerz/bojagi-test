import React from 'react';
import Box from './Box';

export default { title: 'Box' };

export const yellow = () => 
<Box color="yellow">
  I am a yellow box with a picture!
  <img src="bojagi.logo.png" alt="my image" />
</Box>;

export const green = () => <Box color="green">I am so green!</Box>

export const red = () => <Box color="red">I am so green! I mean red...</Box>

export const blue = () => <Box color="blue">Blue.</Box>

export const brown = () => <Box color="brown">Gasp</Box>
