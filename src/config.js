import spring2017 from 'data/spring2017';
import fall2017 from 'data/fall2017';

export default {
  url: {
    apply: 'https://recruiting.ucladevx.com',
    applyPM: 'https://goo.gl/forms/576U6itIlwk17NYl2',
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
  years: ['2017_2', '2017_3'],
  yearnames: {
    '2017_2': {
      stylized: 'Spring 2017',
      name: 'Apollo',
      blurb: ''
    },
    '2017_3': {
      stylized: 'Fall 2017',
      name: 'Cassini'
    },
    '2018_1': {
      stylized: 'Winter 2018',
      name: 'Dawn'
    }
  },
  projects: {
    '2017_2': spring2017.data.teams,
    '2017_3': fall2017.data.teams,
    '2018_1': fall2017.data.teams,
  },
  team: {
    '2017_2': spring2017.data.members,
    '2017_3': fall2017.data.members,
    '2018_1': fall2017.data.members,
  },
};
