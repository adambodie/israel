import * as articles from './articles'
import { ROUTES } from './routes'

export const PAGES = [
  {
    scroll: 'day-0', 
    day: 0,
    date: 'November 7-8, 2018',
    items: [ 
    {
      title: 'Things to Bring to Israel', 
      intro: articles.todoIntro, 
      link: 'todoList', 
      image: 'item',
      linkTitle: 'Todo List'
    },
    {
      title: ROUTES[0].title, 
      intro: articles.elAlIntro, 
      link: 'el-al', 
      image: 'globe',
      linkTitle: 'El Al'
    },
    ]
  },
  {
    scroll: 'day-1', 
    day: 1,
    date: 'November 9, 2018',
    items: [ 
    {
      title: ROUTES[1].title, 
      intro: articles.benGurionIntro, 
      link: 'ben-gurion', 
      image: 'welcomeIsrael',
      linkTitle: 'Ben Gurion'
    },
    {
      title: ROUTES[2].title, 
      intro: articles.oldJerusalemIntro, 
      link: 'old-jerusalem', 
      image: 'jerusalem',
      linkTitle: 'Old Jerusalem'
    },
    {
      title: ROUTES[3].title, 
      intro: articles.shukDayIntro, 
      link: 'shuk-day', 
      image: 'shukDay',
      linkTitle: 'Shuk Day'
    }
    ]
  },
  {
    scroll: 'day-2', 
    day: 2,
    date: 'November 10, 2018',
    items: [ 
    {
      title: ROUTES[4].title, 
      intro: articles.shabbatIntro, 
      link: 'shabbat', 
      image: 'shabbat',
      linkTitle: 'Shabbat'
    },
    {
      title: ROUTES[5].title, 
      intro: articles.shukNightIntro, 
      link: 'shuk-night', 
      image: 'shukNight',
      linkTitle: 'Shuk Night'
    },
    ]
  },	
  {
    scroll: 'day-3', 
    day: 3,
    date: 'November 11, 2018',
    items: [ 
    {
      title: ROUTES[6].title, 
      intro: articles.yadVashemIntro, 
      link: 'yad-vashem', 
      image: 'yadVashem',
      linkTitle: 'Yad Vashem'
    },
    {
      title: 'How Not to Eat Your Shakshuka', 
      intro: articles.shakshukaIntro, 
      link: 'shakshuka', 
      image: 'shakshuka',
      linkTitle: 'Shakshuka'
    },
    {
      title: ROUTES[7].title, 
      intro: articles.herzlIntro, 
      link: 'herzl', 
      image: 'herzl',
      linkTitle: 'Mount Herzl'
    },
    {
      title: ROUTES[8].title, 
      intro: articles.benYehudaIntro, 
      link: 'ben-yehuda', 
      image: 'yehuda',
      linkTitle: 'Ben Yehuda'
    },
    ]
  },	
  {
    scroll: 'day-4', 
    day: 4,
    date: 'November 12, 2018',
    items: [ 
    {
      title: ROUTES[9].title, 
      intro: articles.giloIntro, 
      link: 'gilo', 
      image: 'gilo',
      linkTitle: 'Gilo'
    },
    {
      title: ROUTES[10].title, 
      intro: articles.laqyeIntro, 
      link: 'laqye', 
      image: 'laqye',
      linkTitle: 'Laqye'
    },
    {
      title: ROUTES[11].title, 
      intro: articles.aradIntro, 
      link: 'arad', 
      image: 'arad',
      linkTitle: 'Arad'
    }
    ]
  },
  {
    scroll: 'day-5', 
    day: 5,
    date: 'November 13, 2018',
    items: [ 
    {
      title: ROUTES[12].title, 
      intro: articles.desertIntro, 
      link: 'desert', 
      image: 'desert',
      linkTitle: 'Negev Desert'
    },
    {
      title: ROUTES[13].title, 
      intro: articles.romanIntro, 
      link: 'roman', 
      image: 'roman',
      linkTitle: 'Roman Ramp'
    },{
      title: ROUTES[14].title, 
      intro: articles.masadaIntro, 
      link: 'masada', 
      image: 'masada',
      linkTitle: 'Masada'
    },{
      title: ROUTES[15].title,
      intro: articles.snakeIntro, 
      link: 'snake', 
      image: 'snake',
      linkTitle: 'Snake Path'
    },{
      title: ROUTES[16].title, 
      intro: articles.einGediIntro, 
      link: 'ein-gedi', 
      image: 'einGedi',
      linkTitle: 'Ein Gedi'
    },{
      title: ROUTES[17].title, 
      intro: articles.deadSeaIntro, 
      link: 'dead-sea', 
      image: 'deadSea',
      linkTitle: 'Dead Sea'
    },{
      title: ROUTES[18].title, 
      intro: articles.telAvivNightIntro, 
      link: 'tel-aviv-night', 
      image: 'telAvivNight',
      linkTitle: 'Tel Aviv Night'
    }
    ]
  },	
  {
    scroll: 'day-6', 
    day: 6,
    date: 'November 14, 2018',
    items: [ 
    {
      title: ROUTES[19].title, 
      intro: articles.telAvivBeachIntro, 
      link: 'tel-aviv-beach', 
      image: 'telAvivBeach',
      linkTitle: 'Tel Aviv Beach'
    },
    {
      title: ROUTES[20].title, 
      intro: articles.graffitiIntro, 
      link: 'graffiti', 
      image: 'graffiti',
      linkTitle: 'Graffiti'
    },
    {
      title: ROUTES[21].title, 
      intro: articles.carmelIntro, 
      link: 'carmel', 
      image: 'carmel',
      linkTitle: 'Carmel Market'
    },
    {
      title: ROUTES[22].title, 
      intro: articles.tamaIntro, 
      link: 'tama', 
      image: 'tama',
      linkTitle: 'Tel Aviv Museum of Art'
    },{
      title: ROUTES[23].title, 
      intro: articles.kibbutzIntro, 
      link: 'kibbutz', 
      image: 'kibbutz',
      linkTitle: 'Kibbutz'
    },{
      title: 'Rock, Paper, Scissors Showdown at the Kibbutz', 
      intro: articles.gameIntro, 
      link: 'game', 
      image: 'game',
      linkTitle: 'Game'
    }
    ]
  },
  {
    scroll: 'day-7', 
    day: 7,
    date: 'November 15, 2018',
    items: [ 
    {
      title: 'Cats!!!', 
      intro: articles.catIntro, 
      link: 'cat', 
      image: 'cat',
      linkTitle: 'Cats'
    },
    {
      title: ROUTES[24].title,  
      intro: articles.jaffaIntro, 
      link: 'jaffa', 
      image: 'jaffa',
      linkTitle: 'Jaffa'
    },
    {
      title: ROUTES[25].title, 
      intro: articles.innovationIntro, 
      link: 'innovation', 
      image: 'innovation',
      linkTitle: 'Innovation'
    },
    {
      title: ROUTES[26].title, 
      intro: articles.rothschildIntro, 
      link: 'rothschild', 
      image: 'rothschild',
      linkTitle: 'Rothschild'
    },
    {
      title: ROUTES[27].title, 
      intro: articles.independenceIntro, 
      link: 'independence', 
      image: 'independence',
      linkTitle: 'Independence Hall'
    },
    {
      title: ROUTES[28].title, 
      intro: articles.farewellIntro, 
      link: 'farewell', 
      image: 'farewell',
      linkTitle: 'Farewell'
    },
    {
      title: 'Rockin\' Jukebox: Sababa!', 
      intro: articles.jukeboxIntro, 
      link: 'jukebox', 
      image: 'jukebox',
      linkTitle: 'Jukebox'
    },
    {
      title: ROUTES[29].title, 
      intro: articles.epilogueIntro, 
      link: 'epilogue', 
      image: 'home',
      linkTitle: 'Epilogue'
    }
    ]
  }
]