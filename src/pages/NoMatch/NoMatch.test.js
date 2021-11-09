import React from 'react';
import {render} from '@testing-library/react';
import  NoMatch from '.';

describe('NoMatch component', () => {
  test('not found snapshot', () => {
    const { container } = render(<NoMatch />)
    expect(container.firstChild).toMatchSnapshot()
  });
});