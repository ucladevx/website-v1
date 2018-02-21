import spring2017 from 'data/spring2017';
import fall2017 from 'data/fall2017';
import winter2018 from 'data/winter2018';

export default {
  url: {
    apply: 'https://recruiting.ucladevx.com',
    applyPM: 'https://recruiting.ucladevx.com',
    mailingList: 'http://eepurl.com/cFOmXH',
    workRequest: 'https://goo.gl/forms/ZmiidAbizEhYDMnG3',
    demoday: {
      rsvp: 'http://google.com',
      sponsor: 'http://google.com',
    },
    social: {
      fb: 'https://www.facebook.com/groups/ucladevx/',
      gh: 'https://github.com/ucladevx',
      em: 'mailto:ucladevx@gmail.com',
      yt: 'https://www.youtube.com/channel/UCf4uTKuKJe-Pg3zFRYpfNpA',
    },
    sponsor: {
      stickermule: 'https://www.stickermule.com/',
    },
  },
  demoday: {
    time: 1521082800000,
  },
  years: ['spring2017', 'fall2017', 'winter2018'],
  yearnames: {
    'spring2017': {
      stylized: 'Spring 2017',
      name: 'Apollo',
      blurb: ''
    },
    'fall2017': {
      stylized: 'Fall 2017',
      name: 'Cassini'
    },
    'winter2018': {
      stylized: 'Winter 2018',
      name: 'Dawn'
    }
  },
  projects: {
    'spring2017': spring2017.data.teams,
    'fall2017': fall2017.data.teams,
    'winter2018': winter2018.data.teams,
  },
  team: {
    'spring2017': spring2017.data.members,
    'fall2017': fall2017.data.members,
    'winter2018': winter2018.data.members,
  },
};
