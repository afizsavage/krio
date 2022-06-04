import React from 'react';
import WordOfTheDay from './todays-word';

const Main = () => (
  <main className="flex flex-col h-full overflow-y-hidden flex-grow w-full">
    <WordOfTheDay />
  </main>
);

export default Main;
