# VuePress 2

## Paigaldamine

Installi esimene osa toimib täpselt nii, nagu siin juhendatud:  
[https://vuepress2.netlify.app/guide/getting-started.html](https://vuepress2.netlify.app/guide/getting-started.html)

## Baaskonfiguratsioon

Vt siit: [https://vuepress2.netlify.app/guide/configuration.html#config-file](https://vuepress2.netlify.app/guide/configuration.html#config-file)

Esmase konfiguratsioonina loo `.vuepress`kataloogi config.js fail ja lisa sinna allolev tekst:

```bash
module.exports = {
  lang: "et",
  title: "Tere, Vuepress!",
  description: "See on mu esimene Vuepressi leht! Tegelt teine",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
}
```

Sellega kirjutad lehel mõned metaandmed ja omakorda mõne teema parameetri.  
Võib juhtuda, et neid muutusi nn hot-reloadiga ei näe ja pead brauserit värskendama.

## Menüü lisamine

[https://vuepress2.netlify.app/reference/default-theme/config.html#navbar](https://vuepress2.netlify.app/reference/default-theme/config.html#navbar)

Menüü lisamiseks lisa `config.js` faili `navbar`i kirjed (koos juba enne kirjutatuga):

```bash
module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePresss!',
  description: 'This is my first VuePress site',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
        // esileht
        {
          text: 'Kodu',
          link: '/',
        },
        // teine leht teises folderis
        {
            text: 'Prototüüpimine',
            link: '/prototyypimine/',
          },
      ],
  },
}
```
