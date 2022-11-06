import React from 'react';
import _ from './Main.module.css';
import {Text} from '../../UI/Text';
import {Layout} from '../Layout/Layout';
import {List} from './List/List';

export const Main = () => (
  <main className={_.main}>
    <Layout>
      <List/>
    </Layout>
  </main>
);
