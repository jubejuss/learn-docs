module.exports = {
lang: "et",
title: "Tere, Vuepress!",
description: "See on mu esimene Vuepressi leht! Tegelt teine. Või kolmas.",

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
      ],
      sidebar: 'auto'
  },
}
