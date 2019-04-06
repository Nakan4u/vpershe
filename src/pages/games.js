import React from 'react';
import './team.less';
import Layout from '../layouts';
import { gameData } from './gameData';

const gameList = [
  {
    name: 'game1',
    category: 'category1',
    data: gameData
  },
  {
    name: 'game2',
    category: 'category2',
    data: gameData
  }
];

export default function Template() {
  const data = gameList;

  return (
    <Layout>
      <div className="index-page__content-wrapper">
        <h1>Hello world!</h1>
        <p>Games list will be here123:</p>
        <ul>
          {data.map(game => (
            <li>{game.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
