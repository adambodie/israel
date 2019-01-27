import React from 'react';
import renderer from 'react-test-renderer';
import { StateMock } from '@react-mock/state';
import {
	render,
    cleanup,
    fireEvent,
    waitForElement
  } from 'react-testing-library'

import Rabin from '../../components/Graffiti/Rabin';

afterEach(cleanup) 

it('renders correctly', () => {
	const tree = renderer.create(<Rabin />).toJSON();
	expect(tree).toMatchSnapshot();
});

const renderComponent = ({ className, testId }) =>
  render(
    <StateMock state={{ className, testId }}>
      <Rabin/>
    </StateMock>
  );

  it('renders initial state', async () => {
    const { getByTestId } = renderComponent({ className: '', testId: 'hoverOff' });
    await waitForElement(() => getByTestId(/hoverOff/i));
  });

  it('update state', async () => {
    const { getByTestId } = renderComponent({ className: '', testId: 'hoverOff' });  
    fireEvent.mouseOver(getByTestId(/hoverOff/i));
    await waitForElement(() => getByTestId(/hoverOver/i));
    fireEvent.mouseLeave(getByTestId(/hoverOver/i));
    await waitForElement(() => getByTestId(/hoverOff/i));
  });