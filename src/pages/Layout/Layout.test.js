import React from 'react';
import {render} from '@testing-library/react';
import  Layout from '.';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom"

describe('Detalle component', () => {
  test('first call to detail', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  });
});