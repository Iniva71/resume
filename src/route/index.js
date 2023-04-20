// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Inna',
    lastname: 'Ivanova',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ in month',
  address: 'Ukraine, Kryvyi Rih',
}
var footer = {
  social: {
    email: {
      text: '20dikyxa02@ukr.net',
      href: 'mailto:https://mail.ukr.net/desktop#msglist/f0/p0',
    },
    phone: {
      text: '+380978717401',
      href: 'tel:+380978717401',
    },
    canva: {
      text: 'Фото редактор Сanva',
      href: 'https://www.canva.com/ru_ru/fotoredaktor/',
    },
  },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume 1 |Summary',
    },
    header,
    main: {
      summary: {
        title: {
          name: 'Summary',
          big: true,
        },
        text: 'Pet project for parsing sport betting data from different platforms  odds  and sport statistics ',
      },
      experience: {
        title: {
          name: 'Experience',
          big: false,
        },
        text: 'Pet project for parsing sport betting data from different platforms  odds  and sport statistics',
      },
    },
    footer,
  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume 2| skills',
    },
    header,

    main: {
      title: {
        name: 'All skills',
        big: true,
      },
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        {
          name: 'VS code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 0,
          isTop: false,
        },
        { name: 'Handlebars', point: 8, isTop: true },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        { name: 'PHP' },
      ],
      title: {
        name: 'Hobbies',
        big: false,
      },
      hobbies: [
        { name: 'Painting', isMain: true },
        { name: 'Bulding', isMain: false },
        { name: 'Knitting', isMain: true },
      ],
    },
    footer,
  })
})
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume 2 homework| Education',
    },
    header,
    main: {
      title: {
        name: 'My education',
        big: true,
      },
      educations: [
        {
          name: 'Kryvyi Rih Secondary School',
          isEnd: true,
        },
        {
          name: 'Dnipro Technological College',
          isEnd: true,
        },
        { name: 'IT courses', isEnd: false },
      ],

      title: {
        name: 'My certificate',
        big: false,
      },
      certificates: [
        { name: 'Certificate SS', id: '98564' },
        { name: 'Diplom', id: '85694' },
        { name: 'Certificate IT', id: '0263' },
      ],
    },

    footer,
  })
})
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big-content',

    page: {
      title: 'Resume 4| Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fulcteck Develiper',
          company: {
            name: 'IT BRAINS',
            url: '/https://it-brains.om.ua/',
          },
          duration: {
            from: '21.12.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Web application',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML|CSS' },
                { name: 'Nodejs' },
              ],
              awards: [
                { name: 'Dackgraund' },
                { name: 'Preparing SEO optimisetions' },
              ],
              stackAmount: 10,
              awardAmount: 20,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout: 'bio',
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
