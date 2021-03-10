module.exports = {
lang: "et",
title: "Dokuveeb",
description: "Koolitööde dokumentatsioon.",
base: "/learn-docs/",
dest: "gh-pages",

  themeConfig: {
    logo: '/images/kass.png',
    navbar: [
        // esileht
        {
          text: 'Kodu',
          link: '/',
        },
        // teine leht teises folderis
        {
            text: 'DOCS',
            link: '/vpdocs/',
        },
        // kolmas leht kolmandas folderis jne
        {
            text: 'Prototüüpimine',
            link: '/prototyypimine/',
        },
        {
            text: 'CVI',
            link: '/cvi/',
        },
        {
            text: 'Markdown',
            link: '/md/',
        },
        {
            text: 'GIT',
            link: '/git/',
        },
        {
            text: 'Näidis',
            link: '/naidis/',
        },
      ],
      sidebar: 'auto'
  },
}
