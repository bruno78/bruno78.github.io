#### How to deploy:

Duplicate your _config.yml and call it _config_dev.yml.

Leave the _config_dev.yml as is, and change _config.yml for the live site.

```
baseurl: "/startjekyll"
url: "http://taniarascia.github.io"
```

```
jekyll serve --config _config.yml,_config_dev.yml
```
