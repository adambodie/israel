import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoMatch from '../components/NoMatch';


const location = { pathname: '/dashboard/' };

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NoMatch location={location} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly with correct pathname', () => {
	const tree = renderer.create(<NoMatch location={location} />).toJSON();
	expect(tree).toMatchSnapshot();
});

