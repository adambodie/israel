import React from 'react';
import { shallow } from 'enzyme';

beforeEach(() => {
  jest.resetModules();
});

const contextPages = { pages: [
    {
        scroll: 'day-0', 
        day: 0,
        items: [ 
        {
            title: 'Things to Bring to Israel', 
            intro: 'intro intro intro', 
            link: 'todoList', 
            image: 'items'
        },
        {
            title: 'Title', 
            intro: 'El Al El Al El Al', 
            link: 'el-al', 
            image: 'globe'
        }
        ]
    },            {
        scroll: 'day-1', 
        day: 1,
        items: [ 
        {
            title: 'Things to Bring to Israel', 
            intro: 'intro intro intro', 
            link: 'todoList', 
            image: 'items'
        }
        ]
    }
] };
const getMainPageItemsWithContext = (context = contextPages) => {

    jest.doMock('../../components/Context/main', () => {
        return {
          MainContext: {
            Consumer: (props) => props.children(context)
          }
        }
      });
      return require('../../components/Main/MainPage').default;
    };
    
    describe('<MainPage />', () => {
        it('should return a list of pages', () => {
          const MainPage = getMainPageItemsWithContext();
          const outer = shallow(<MainPage />);
          const Children = outer.props().children(contextPages);
          const wrapper = shallow(Children);
          expect(wrapper.find('.o-main').length).toBe(1);
        });       
    });
