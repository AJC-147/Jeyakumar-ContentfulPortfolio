import React from 'react';
import { Heading, Box } from 'rebass';
import LayoutMate from '../components/LayoutMate';

const NotFoundPage = () => (
  <LayoutMate>
    <div id="404">
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']}>
          404
        </Heading>
        <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']}>
          {"There isn't anything here"}
        </Heading>
      </Box>
    </div>
  </LayoutMate>
);

export default NotFoundPage;
