import React from 'react';
import {render} from '@testing-library/react';
import Lista from './';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('List component', () => {
  test('first call to list', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Lista />
      </QueryClientProvider>)
    
    expect(container.firstChild).toMatchSnapshot()
  });
});