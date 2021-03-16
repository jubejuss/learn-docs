# Markdown'i juhend

MD juhend: [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)  
MD juhend Githubis: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Markdowni nipid:  
Reavahetus – reavahetuseks lisa rea lõppu kaks tühikut.

Kirjutan lause ja vajutan enterit.
Mitte midagi ei juhtu

Aga kirjutan lause ja lisan kaks tühikut ja vajutan enterit  
Vahetab rida

Trellid on h1 taseme pealkiri:

```markdown
# Pealkiri h1
```

Tulemus:

# Pealkiri h1

Kahekordsed trellid on h2 taseme pealkiri jne:

```markdown
## Pealkiri h2

### Pealkiri h3

#### PEalkiri h4
```

tulemus:

## Pealkiri h2

### Pealkiri h3

#### PEalkiri h4

## Bold

Boldiks muutmiseks tuleb tekst panna mõlemalt poolt kahge tärni vahele:

```markdown
**Jäme tekst**
```

tulemus:  
**Jäme tekst**

## Kursiiv/Italic

Kui on vaja tekst kaldu nügida, pista see alakriipsude vahele:

```markdown
_italic_
```

tulemus:  
_italic_

## Kood

Lühikese koodijupi eristamiseks kasuta tagurpidi ülakoma nt nii:

```markdown
`kood`
```

tulemus:  
`kood`

Koodiploki kirjutamiseks, kasuta 3x tagurpidi ülakoma:

````markdown
```
koodijupp
```
````

tulemus:

```markdown
koodijupp
```

Kui tahad, et mustas kastis kuvataks koodujuppi vastava keele vormingus, lisa nimetus ülemiste tagurpidi ülakomade järg:

````
```markdown
## pealkiri
```
````

tulemus:

```markdown
## pealkiri
```

või:

````
```bash
npm run install
```
````

tulemus:

```bash
npm run install
```

või:

````
```css
body {
    background: #ccc
}
```
````

tulemus:

```css
body {
  background: #ccc;
}
```

jne

## Lingid

```md
[lingi nimi](https://jubejuss.github.io/learn-docs/md)
```

tulemus:  
[lingi nimi](https://jubejuss.github.io/learn-docs/md)

## pildid

Piltide lisamiseks:

```markdown
![VuePress Logo](/learn-docs/images/kass.png)
```

tulemus:  
![VuePress Logo](/learn-docs/images/kass.png)
