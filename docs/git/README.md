# Giti juhend

Loo Githubis uus repo ja järgi edasisi juhendeid.  
Github, kui uut repot teed, annab edasi valikud. Sina kasuta oma arvutis järgmist:

```bash
git init
git add .
git commit -m "first commit"
git branch M main
git remote add origin https://github.com/SINUNIMI/learn-docs-test.git
git push -u origin main
```

Juhul kui saad errori:

```bash
git branch -M main
error: refname refs/heads/master not found
fatal: Branch rename failed
```

Siis lisa esimene commit:

```bash
git add .
git commit -m "my first commit"
```

Võid proovida ka siin näidatut: [https://confluence.atlassian.com/bitbucketserverkb/src-refspec-master-does-not-match-any-error-when-pushing-to-repository-788727186.html](https://confluence.atlassian.com/bitbucketserverkb/src-refspec-master-does-not-match-any-error-when-pushing-to-repository-788727186.html)  
Ja lõpuks aitab Google.

ja siis jätka sealt, kus error sisse tuli.

Kui tulid siia DOCS lehelt, siis [võid tagasi minna](../vpdocs/README.md/#deploy)

## Github pages

Eelduseks on `config.js` failis seaded, et build kirjutatakse `github-pages` folderisse. ehk:

```bash
module.exports = {
...
dest: 'gh-pages',
...
}
```

Loo juurkataloogi folder `github-pages`  
Loo juurkataloogi fail `deploy.sh`  
Lisa sellesse:

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd gh-pages

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add .
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jubejuss/learn-docs.git master:gh-pages

cd -
```

Salvesta ja lisa `package.json`sse skriptide alla `"deploy": "sh 'deploy.sh'"`

Jooksuta `npm run deploy`
