# [FoodTech](https://foodtechx.herokuapp.com)


### Description du projet 

On révolutionne la restauration avec un site qui donne envie de venir déguster un plat ou tout simplement boire un café.

------------------------------
### On utilise 

* ruby '2.5.1'
* gem 'rails', '5.2.1'
* une base sqlite 3


------------------------------
### 🖥 Instructions 

Pour tester cette application, importez le dossier sur votre pc, en suivant les instructions suivantes :


```sh
$ https://github.com/loundness/startup-foodtech

$ bundle install --without production

$ rails db:migrate

$ rails server
```
### La structure de l'appli 

```
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   │       ├── application_girl.scss
│   │       ├── application_lyon.scss
│   │       └── application.scss
│   ├── channels
│   ├── controllers
│   ├── helpers
│   ├── jobs
│   ├── mailers
│   ├── models
│   ├── services
│   └── views
│
├── bin
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── credentials.yml.enc
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   ├── initializers.rb
│   ├── locales
│   ├── puma.rb
│   ├── routes.rb
│   ├── spring.rb
│   └── storage.yml
├── config.ru
├── db
├── Gemfile
├── Gemfile.lock
├── log
├── Rakefile
└─── README.md
```



🚀 Pour accéder à la page Heroku, [FoodTech](https://foodtechx.herokuapp.com/)
