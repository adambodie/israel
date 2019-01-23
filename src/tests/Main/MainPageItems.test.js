import React from 'react';

beforeEach(() => {
  jest.resetModules();
});

/*const contextPages = { pages: [
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


const getMainPageItemsWithContext = (context= contextPages) => {

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
        const MainPageItems = getMainPageItemsWithContext();
        const outer = shallow(<MainPageItems />);
        const Children = outer.props().children(contextPages);
        const wrapper = shallow(Children);        
        it('should return a list of pages', () => {
          expect(wrapper.find('.o-content__inner-body').length).toBe(3);
        });       
    });*/
