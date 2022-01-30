import React, { Profiler } from 'react';
import Directory from 'src/components/directory/directoy.component';
import { HomepageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomepageContainer>
      <Profiler
        id='directoy'
        onRender={(id, phase, actucalDuration) => {
          console.log({ id, phase, actucalDuration });
        }}
      >
        <Directory />
      </Profiler>
    </HomepageContainer>
  );
};

export default HomePage;
