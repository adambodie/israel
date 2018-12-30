import React from 'react';
import { shallow } from 'enzyme';

beforeEach(() => {
  jest.resetModules();
});

const getMainPageItemsWithContext = (context= {
    pages: [
        {
            scroll: 'day-0', 
            day: 0,
            items: [ 
            {
                title: "Things to Bring to Israel", 
                intro: "intro intro intro", 
                link: 'todoList', 
                image: 'items'
            },
            {
                title: "Title", 
                intro: "El Al El Al El Al", 
                link: 'el-al', 
                image: 'globe'
            }
            ]
        }
    ]
}) => {

    jest.doMock('../../components/Context/main', () => {
        return {
          MainContext: {
            Consumer: (props) => props.children(context)
          }
        }
      });
      return require('../../components/Main/MainPageItems').default;
    };
    
    describe('<MainPageItems />', () => {
        it('should return a list of pages', () => {
          const MainPageItems = getMainPageItemsWithContext();
          const outer = shallow(<MainPageItems />);
          const Children = outer.props().children({ pages: [
            {
                scroll: 'day-0', 
                day: 0,
                items: [ 
                {
                    title: "Things to Bring to Israel", 
                    intro: "intro intro intro", 
                    link: 'todoList', 
                    image: 'items'
                },
                {
                    title: "Title", 
                    intro: "El Al El Al El Al", 
                    link: 'el-al', 
                    image: 'globe'
                }
                ]
            }
        ] });
          const wrapper = shallow(Children);
          expect(wrapper.find('.o-content__inner-body').length).toBe(2);
        });       
    });