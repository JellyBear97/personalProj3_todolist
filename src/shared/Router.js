import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import TodoDetail from '../pages/TodoDetail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tododetail/:id" element={<TodoDetail />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
