import React from 'react';
import {render} from '@testing-library/react';
import Detalle from './';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Detalle component', () => {
  test('first call to detail', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Detalle />
      </QueryClientProvider>)
    
    expect(container.firstChild).toMatchSnapshot()
  });
});