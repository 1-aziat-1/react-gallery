import React from 'react';
import _ from './Main.module.css';
import {Layout} from '../Layout/Layout';
import {List} from './List/List';
import { Route, Routes } from 'react-router-dom';
import { Modal } from '../Modal/Modal';

export const Main = () => (
  <main className={_.main}>
    <Layout>
      <Routes>
        <Route path='' element={<List/>}>
          <Route path='/picture/:id' element={<Modal/>} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
