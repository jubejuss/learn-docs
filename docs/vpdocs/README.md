# VuePress 2

## Paigaldamine

Installi esimene osa toimib täpselt nii, nagu Vuepressi lehel näidatud:  
[https://vuepress2.netlify.app/guide/getting-started.html](https://vuepress2.netlify.app/guide/getting-started.html)

Võib installida ametliku juhendi järgi või kasutades alljärgnevat

```sh
mkdir vuepressifolderinimi
cd vuepressifolderinimi
```

Ehk, et lood folderi ja liigud sinna sisse.  
Seejärel initsialiseerid giti (mis küll ei ole kohustuslik) ja lood Node abil `package.json` faili.
Mõlemasse võiks sisestada sobiva info, kuid sobib ka vaikimisi pakutu.

```sh
npm init
```

Nüüd installige VuePress:

```sh
npm install -D vuepress@next
```

Ja lisa `package.json` faili käivitusscriptid:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

(kui ei oska, vaata siinse dokumendi lõppu)

Lisa `.gitignore` (käsklus terminalis):

```bash
echo 'node_modules\n.temp\n.cache' >> .gitignore
```

Kontrolli igaks juhuks üle, et tekkinud `.gitignore` failis oleks kolme rida üksteise all:

```bash
node_modules
.temp
.cache
```

Loo esimene dokument:

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

ja tõmba leht `package.json` faili lisatud scripti abil käima:

```bash
npm run docs:dev
```

## Sisu

Asenda `docs` kataloogis README.md-s olev sellega:

```markdown
---
lang: et
title: Õpidokud
description: Õpilaste tööde dokumentatsioon
home: true
---

# Siia lehele on koondatud ja koondatakse oma tööde dokumentatsioon.

Liigu üleval menüüs, et jõuda soovitud sihtkohta.
```

Loo `docs` katalogi mõned folderid sisuga README.md  
Folderid loo sellised, millised soovid, ehk, mis lehekülgi sa luua tahad. Kuid võid algatuseks kasutada samu, mis siinsel lehel:

```bash
└─ docs
   ├─ .vuepress # see on juba olemas
   └─ vpdocs
      └─ README.md
   └─ prototyypimine
      └─ README.md
   └─ cvi
      └─ README.md
   └─ md
      └─ README.md
   └─ git
      └─ README.md
```

Kõigi README.md-de sisse kirjuta näidiseks kah midagi. Näiteks:

```markdown
# Pealkiri 1

sisu

## Pealkiri 2

sisusisu
```

## Baaskonfiguratsioon

Vt siit: [https://vuepress2.netlify.app/guide/configuration.html#config-file](https://vuepress2.netlify.app/guide/configuration.html#config-file)

Esmase konfiguratsioonina loo `.vuepress`kataloogi config.js fail ja lisa sinna allolev tekst:

```js
module.exports = {
  lang: "et",
  title: "Tere, Vuepress!",
  description: "See on mu esimene Vuepressi leht! Tegelt teine",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
};
```

Sellega kirjutad lehel mõned metaandmed ja omakorda mõne teema parameetri.  
Võib juhtuda, et neid muutusi nn hot-reloadiga ei näe ja pead brauserit värskendama.

## Menüü lisamine

[https://vuepress2.netlify.app/reference/default-theme/config.html#navbar](https://vuepress2.netlify.app/reference/default-theme/config.html#navbar)

Menüü lisamiseks lisa `config.js` faili `navbar`i kirjed (koos juba enne kirjutatuga):

```js
module.exports = {
  lang: "et",
  title: "Tere, Vuepress!",
  description: "See on mu esimene Vuepressi leht! Tegelt teine",
  dest: "gh-pages",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      // esileht
      {
        text: "Kodu",
        link: "/",
      },
      // teine leht teises folderis
      {
        text: "DOCS",
        link: "/vpdocs/",
      },
      // kolmas leht kolmandas folderis jne
      {
        text: "Prototüüpimine",
        link: "/prototyypimine/",
      },
      {
        text: "CVI",
        link: "/cvi/",
      },
    ],
    sidebar: "auto",
  },
};
```

Nagu näha, on lisatud ka külgmenüü ja lihtsaim moodus ongi teha seda automaatselt, ehk moel, et süsteem korjab ise vastaval lehel olevad `h1` ja `h2` taseme pealkirjad menüüsse.  
5. rida ütleb, kuhu `build` käskluse tulemusel valmis veebileht "toota." Selleks peab vastavanimeline folder olema juurkataloogis.

## PROBLEEM!

**Näib, et ilma sekkumata menüüsid "hot-reloadiga" näitama ei hakka.**

---

**SEEGA SIINKOHAL KATKESTA DEV!!!**  
`ctrl+c` ja uuesti `npm run dev`.  
Nüüd peaks lehel muudatused näha olema.

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

```markdown
![VuePress Logo](/images/logo.png)
```

Tulemus:
![VuePress Logo](/learn-docs/images/kass.png)

## Base

See on see, mille abil öeldakse ära, kus mingid failid asuvad. Nt praegusel juhul pistame me oma valmis veebi Github Pages'isse, mille aadressiks on `https://kasutajanimi.github.io/learn-docs`  
See tähendab, et me peaks määrama baasiks selle `/learn-docs`  
Seega muudame oma `config.js` faili, lisa see `base: "/learn-docs/"` nt selle `dest: "gh-pages",`i ette:

```js
module.exports = {
...
base: "/learn-docs/",
dest: "gh-pages",
...
```

ning kasutame ka piltide vms lisamisel seda rada:

```markdown
![VuePress Logo](/learn-docs/images/kass.png)
```

## Deploy

Ja lõpuks saadame oma lehe laivi.  
Esmalt tee endale Githubis repo.

Github, kui uut repot teed, annab edasi valikud. Sina kasuta oma arvutis järgmist:

```bash
git init
git add .
git commit -m "first commit"
git branch M main
git remote add origin https://github.com/SINUNIMI/learn-docs-test.git
git push -u origin main
```

vaata vajadusel lisa siit: : [Giti juhend](/learn-docs/git)

Nüüd loo juurkataloogi folder `gh-pages`

Seejärel tee juurkataloogi fail `deploy.sh` ja lisa sinna:

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# liigu dist folderisse
cd gh-pages

# Initsieeri git ja lisa kommid
git init
git add .
git commit -m 'deploy'

# pushi reposse
git push -f git@github.com:sinunimi/learn-docs.git master:gh-pages

cd -
```

Lisaks võib `package.json` faili lisada ka skripti, mis selle sh faili käima tõmbab:

```json
    "deploy": "sh 'deploy.sh'"
```

**NB! Vaata, et oleks sinu andmed**

Seejärel saab githubis seadistada oma lehe end näitama. Klikka lahti oma repo sätted:
![gh-pages](/learn-docs/images/reposettings.png)  
ja otsi sealt üles GitHub Pages:
![gh-pages](/learn-docs/images/gh-pages.png)

## Lõplik konfiguratsioon

```js
module.exports = {
  lang: "et",
  title: "Tere, Vuepress!",
  description: "See on mu esimene Vuepressi leht! Tegelt teine. Või kolmas.",
  base: "/learn-docs/",
  dest: "gh-pages",

  themeConfig: {
    logo: "/images/kass.png",
    navbar: [
      // esileht
      {
        text: "Kodu",
        link: "/",
      },
      // teine leht teises folderis
      {
        text: "DOCS",
        link: "/vpdocs/",
      },
      // kolmas leht kolmandas folderis jne
      {
        text: "Prototüüpimine",
        link: "/prototyypimine/",
      },
      {
        text: "CVI",
        link: "/cvi/",
      },
      {
        text: "Markdown",
        link: "/md/",
      },
      {
        text: "GIT",
        link: "/git/",
      },
    ],
    sidebar: "auto",
  },
};
```

`Package.json`näeb välja umbes selline:

```json
{
  "name": "learn-docs",
  "version": "1.0.0",
  "description": "Õppeeesmärkidel tehtav vuepressi install",
  "main": "index.js",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "sh 'deploy.sh'"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vuepress": "^2.0.0-alpha.26"
  }
}
```
