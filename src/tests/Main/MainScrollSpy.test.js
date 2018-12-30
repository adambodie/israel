import React from 'react';
import { shallow } from 'enzyme';

beforeEach(() => {
  jest.resetModules();
});

const getMainScrollSpyWithContext = (context= {
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
      return require('../../components/Main/MainScrollSpy').default;
    };
    
    describe('<MainScrollSpy />', () => {
        it('should return a list of scrollspy items', () => {
          const MainScrollSpy = getMainScrollSpyWithContext();
          const outer = shallow(<MainScrollSpy />);
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
            },            {
                scroll: 'day-1', 
                day: 1,
                items: [ 
                {
                    title: "Things to Bring to Israel", 
                    intro: "intro intro intro", 
                    link: 'todoList', 
                    image: 'items'
                }
                ]
            }
        ] });
          const wrapper = shallow(Children);
          expect(wrapper.find('.c-side-nav__item').length).toBe(2);
          expect(wrapper.find('.c-side-nav__item').first().text()).toBe('Introduction');
        });       
    });