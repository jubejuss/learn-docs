# VuePress 2

## Paigaldamine

Installi esimene osa toimib täpselt nii, nagu Vuepressi lehel näidatud:  
[https://vuepress2.netlify.app/guide/getting-started.html](https://vuepress2.netlify.app/guide/getting-started.html)

```sh
mkdir vuepressifolderinimi
cd vuepressifolderinimi
```

Ehk, et loote folderi ja liigute sinna sisse.  
Seejärel initsialiseerite giti (mis küll ei ole kohustuslik) ja loote node abil `package.json` faili.
Mõlemasse võiks sisestada sobiva info, kuid sobib ka vaikimisi pakutu.

```sh
git init
npm init
```

Nüüd installige VuePress:

```sh
npm install -D vuepress@next
```

Ja lisage `package.json` faili käivitusscriptid:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Lisa temp ja `.gitignore`:

```bash
echo 'node_modules\n.temp\n.cache' >> .gitignore
```

Tee esimene dokument:

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

ja tõmba leht `package.json` faili lisatud scripti abil käima:

```bash
npm run docs:dev
```

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
lang: "et",
title: "Tere, Vuepress!",
description: "See on mu esimene Vuepressi leht! Tegelt teine",
dest: 'github-pages',

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
      ],
      sidebar: 'auto'
  },
}
```

Nagu näha, on lisatud ka külgmenüü ja lihtsaim moodus ongi teha seda automaatselt, ehk moel, et süsteem korjab ise vastaval lehel olevad `h1` ja `h2` taseme pealkirjad menüüsse.  
5. rida ütleb, kuhu `build` käskluse tulemusel valmis veebileht "toota." Selleks peab vastavanimeline folder olema juurkataloogis.

## Logo muutmine

Staatilised komponendid pannakse `.vuepress/public`folderisse.

```bash
└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ logo.png
   └─ vpdocs
      └─ README.md
```

Sealt loeb süsteem ise need välja:

```bash
![VuePress Logo](/images/logo.png)
```

Tulemus:
![VuePress Logo](/images/kass.png)
