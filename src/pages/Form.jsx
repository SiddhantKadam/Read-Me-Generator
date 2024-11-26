import { React, useState } from "react";
import TextBox from "../component/textBox/Text-box.jsx";
import { useNavigate } from 'react-router-dom';
import IconCheckbox from "../component/iconCheckbox/Icon-checkbox.jsx"

const allSkills = [{
    title: "Programming Languages",
    array: [
        { id: 'c-original', label: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/c/c-original.svg' },
        { id: 'cplusplus-original', label: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/cplusplus/cplusplus-original.svg' },
        { id: 'csharp-original', label: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/csharp/csharp-original.svg' },
        { id: 'go-original', label: 'Go', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/go/go-original.svg' },
        { id: 'java-original', label: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/java/java-original.svg' },
        { id: 'javascript-original', label: 'Javascript', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg' },
        { id: 'typescript-original', label: 'Typescript', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg' },
        { id: 'php-original', label: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg' },
        { id: 'perl-original', label: 'Perl', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/perl/perl-original.svg' },
        { id: 'ruby-original', label: 'Ruby', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/ruby/ruby-original.svg' },
        { id: 'scala-original', label: 'Scala', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/scala/scala-original.svg' },
        { id: 'python-original', label: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg' },
        { id: 'swift-original', label: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/swift/swift-original.svg' },
        { id: 'objectivec-plain', label: 'Objective-C', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/objectivec/objectivec-plain.svg' },
        { id: 'clojure-original', label: 'Clojure', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/clojure/clojure-original.svg' },
        { id: 'rust-original', label: 'Rust', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/rust/rust-original.svg' },
        { id: 'haskell-original', label: 'Haskell', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/haskell/haskell-original.svg' },
        { id: 'coffeescript-original', label: 'Coffeescript', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/coffeescript/coffeescript-original.svg' },
        { id: 'elixir-original', label: 'Elixir', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/elixir/elixir-original.svg' },
        { id: 'erlang-original', label: 'Erlang', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/erlang/erlang-original.svg' },
        { id: 'nim-original', label: 'Nim', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nim/nim-original.svg' },
    ]
},
{
    title: "Frontend Languages",
    array: [
        { id: 'vuejs', label: 'Vue Js', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vuejs/vuejs-original.svg' },
        { id: 'react-original', label: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original.svg' },
        { id: 'svelte-original', label: 'Svelte', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/svelte/svelte-original.svg' },
        { id: 'angularjs-original-wordmark', label: 'AngularJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angularjs/angularjs-original-wordmark.svg' },
        { id: 'angular-original', label: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg' },
        { id: 'backbonejs-original', label: 'BackboneJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/backbonejs/backbonejs-original.svg' },
        { id: 'bootstrap-original', label: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg' },
        { id: 'vuetify-original', label: 'Vuetify', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vuetify/vuetify-original.svg' },
        { id: 'css3-original', label: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-original.svg' },
        { id: 'html5-original', label: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg' },
        { id: 'gulp-plain', label: 'Gulp', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/gulp/gulp-plain.svg' },
        { id: 'sass-original', label: 'Sass', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/sass/sass-original.svg' },
        { id: 'redux-original', label: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/redux/redux-original.svg' },
        { id: 'webpack-original', label: 'Webpack', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/webpack/webpack-original.svg' },
        { id: 'babel-original', label: 'Babel', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/babel/babel-original.svg' },
        { id: 'tailwindcss-original', label: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg' },
        { id: 'materializecss-original', label: 'Materialize CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/materializecss/materializecss-original.svg' },
        { id: 'bulma-plain', label: 'Bulma', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bulma/bulma-plain.svg' },
        { id: 'qt-original', label: 'Qt', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/qt/qt-original.svg' },
        { id: 'ember-original', label: 'Ember', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/ember/ember-original.svg' }
    ]
},
{
    title: "Backend Languages",
    array: [
        { id: 'nodejs-original-wordmark', label: 'NodeJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg' },
        { id: 'spring-original', label: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/spring/spring-original.svg' },
        { id: 'express-original', label: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/express/express-original.svg' },
        { id: 'graphql-plain', label: 'GraphQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/graphql/graphql-plain.svg' },
        { id: 'apachekafka-original', label: 'Kafka', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/apachekafka/apachekafka-original.svg' },
        { id: 'rabbitmq-original', label: 'RabbitMQ', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/rabbitmq/rabbitmq-original.svg' },
        { id: 'hadoop-original', label: 'Hadoop', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/hadoop/hadoop-original.svg' },
        { id: 'nginx-original', label: 'NGINX', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nginx/nginx-original.svg' },
        { id: 'nestjs-original', label: 'NestJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nestjs/nestjs-original.svg' }
    ]
},
{
    title: "Mobile App Languages",
    array: [
        { id: 'android-original', label: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/android/android-original.svg' },
        { id: 'flutter-original', label: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flutter/flutter-original.svg' },
        { id: 'dart-original', label: 'Dart', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dart/dart-original.svg' },
        { id: 'kotlin-original', label: 'Kotlin', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/kotlin/kotlin-original.svg' },
        { id: 'xamarin-original', label: 'Xamarin', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/xamarin/xamarin-original.svg' },
        { id: 'react-original-wordmark', label: 'React Native', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg' },
        { id: 'ionic-original', label: 'Ionic', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/ionic/ionic-original.svg' }
    ]
},
{
    title: "AI/ML",
    array: [
        { id: 'tensorflow-original', label: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tensorflow/tensorflow-original.svg' },
        { id: 'pytorch-original', label: 'Pytorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/pytorch/pytorch-original.svg' },
        { id: 'pandas-original', label: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/pandas/pandas-original.svg' },
        { id: 'opencv-original', label: 'OpenCV', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/opencv/opencv-original.svg' },
        { id: 'scikitlearn-original', label: 'Scikit learn', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/scikitlearn/scikitlearn-original.svg' }
    ]
},
{
    title: "Database",
    array: [
        { id: 'mongodb-original', label: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original.svg' },
        { id: 'mysql-original', label: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original.svg' },
        { id: 'postgresql-original', label: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postgresql/postgresql-original.svg' },
        { id: 'redis-original', label: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/redis/redis-original.svg' },
        { id: 'oracle-original', label: 'Oracle', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/oracle/oracle-original.svg' },
        { id: 'cassandra-original', label: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/cassandra/cassandra-original.svg' },
        { id: 'couchdb-original', label: 'CouchDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/couchdb/couchdb-original.svg' },
        { id: 'realm-original', label: 'Realm', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/realm/realm-original.svg' },
        { id: 'mariadb-original', label: 'MariaDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mariadb/mariadb-original.svg' },
        { id: 'elasticsearch-original', label: 'Elastic Search', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/elasticsearch/elasticsearch-original.svg' },
        { id: 'sqlite-original', label: 'SQlite', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/sqlite/sqlite-original.svg' },
    ]
},
{
    title: "Data Visualization",
    array: [
        { id: 'd3js-original', label: 'D3JS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/d3js/d3js-original.svg' },
        { id: 'kibana-original', label: 'Kibana', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/kibana/kibana-original.svg' },
        { id: 'grafana-original', label: 'Grafana', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/grafana/grafana-original.svg' }
    ]
},
{
    title: "Devops",
    array: [
        { id: 'docker-original', label: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/docker/docker-original.svg' },
        { id: 'jenkins-original', label: 'Jenkins', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/jenkins/jenkins-original.svg' },
        { id: 'kubernetes-original', label: 'Kubernetes', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/kubernetes/kubernetes-original.svg' },
        { id: 'amazonwebservices-original-wordmark', label: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { id: 'bash-original', label: 'Bash', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bash/bash-original.svg' },
        { id: 'azure-original', label: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/azure/azure-original.svg' },
        { id: 'vagrant-origina', label: 'Vagrant', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vagrant/vagrant-original.svg' },
        { id: 'circleci-plain', label: 'Circle ci', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/circleci/circleci-plain.svg' },
        { id: 'travis-original', label: 'Travis', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/travis/travis-original.svg' }    ]
},
{
    title: "Backend as a Service(BaaS)",
    array: [
        { id: 'firebase-original', label: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/firebase/firebase-original.svg' },
        { id: 'appwrite-original', label: 'Appwrite', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/appwrite/appwrite-original.svg' },
        { id: 'heroku-original', label: 'Heroku', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/heroku/heroku-original.svg' }
    ]
},
{
    title: "Framework",
    array: [
        { id: 'django-plain', label: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/django/django-plain.svg' },
        { id: 'dot-net-original', label: 'Dot Net', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dot-net/dot-net-original.svg' },
        { id: 'electron-original', label: 'Electron', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/electron/electron-original.svg' },
        { id: 'symfony-original', label: 'Symfony', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/symfony/symfony-original.svg' },
        { id: 'laravel-original', label: 'Laravel', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/laravel/laravel-original.svg' },
        { id: 'codeigniter-plain', label: 'Codeigniter', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/codeigniter/codeigniter-plain.svg' },
        { id: 'rails-plain', label: 'Rails', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/rails/rails-plain.svg' },
        { id: 'flask-original', label: 'Flask', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flask/flask-original.svg' },
        { id: 'quasar-original', label: 'Quasar', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/quasar/quasar-original.svg' }    ]
},
{
    title: "Testing",
    array: [
        { id: 'cypressio-original', label: 'Cypress', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/cypressio/cypressio-original.svg' },
        { id: 'selenium-original', label: 'Selenium', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/selenium/selenium-original.svg' },
        { id: 'jest-plain', label: 'Jest', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/jest/jest-plain.svg' },
        { id: 'mocha-original', label: 'Mocha', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mocha/mocha-original.svg' },
        { id: 'puppeteer-original', label: 'Puppeteer', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/puppeteer/puppeteer-original.svg' },
        { id: 'karma-original', label: 'Karma', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/karma/karma-original.svg' },
        { id: 'jasmine-original', label: 'Jasmine', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/jasmine/jasmine-original.svg' }
    ]
},
{
    title: "Software",
    array: [
        { id: 'illustrator-plain', label: 'Illustrator', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/illustrator/illustrator-plain.svg' },
        { id: 'photoshop-original', label: 'Photoshop', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/photoshop/photoshop-original.svg' },
        { id: 'xd-original', label: 'XD', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/xd/xd-original.svg' },
        { id: 'figma-original', label: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/figma/figma-original.svg' },
        { id: 'blender-original', label: 'Blender', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/blender/blender-original.svg' },
        { id: 'sketch-original', label: 'Sketch', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/sketch/sketch-original.svg' },
        { id: 'matlab-original', label: 'Matlab', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/matlab/matlab-original.svg' },
        { id: 'postman-original', label: 'Postman', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postman/postman-original.svg' }
    ]
},
{
    title: "Static Site Generators",
    array: [
        { id: 'gatsby-original', label: 'Gatsby', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/gatsby/gatsby-original.svg' },
        { id: 'hugo-original', label: 'Hugo', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/hugo/hugo-original.svg' },
        { id: 'jekyll-original', label: 'Jekyll', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/jekyll/jekyll-original.svg' },
        { id: 'nextjs-original', label: 'NextJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg' },
        { id: 'nuxtjs-original', label: 'NuxtJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nuxtjs/nuxtjs-original.svg' },
        { id: 'eleventy-original', label: 'Eleventy', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/eleventy/eleventy-original.svg' }
    ]
},
{
    title: "Game Engines",
    array: [
        { id: 'unity-original', label: 'Unity', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/unity/unity-original.svg' },
        { id: 'unrealengine-original', label: 'Unreal', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/unrealengine/unrealengine-original.svg' }
    ]
},
{
    title: "Automation",
    array: [
        { id: 'ifttt-original', label: 'Ifttt', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/ifttt/ifttt-original.svg' }
    ]
},
{
    title: "Other",
    array: [
        { id: 'linux-original', label: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/linux/linux-original.svg' },
        { id: 'git-original', label: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg' },
        { id: 'arduino-original', label: 'Arduino', icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/arduino/arduino-original.svg' },
    ]
}
];

const addOns = [
    { id: 'count', label: 'Show visitor count badge' },
    { id: 'trophy', label: 'Display github trophy' },
    { id: 'stats', label: 'Display github profile stats card' },
    { id: 'skills', label: 'Highlight top skills' },
    { id: 'streak', label: 'Showcase GitHub streak statistics' }
];

const urlRegex = /^https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(?:\/[^\s]*)?(?:\?[a-zAZ0-9&=_-]+)*$/;

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        workTitle: "",
        aboutMe: "",
        currentProjectName: "",
        currentProjectLink: "",
        currentProjectDecription: "",
        interestedProjectName: "",
        interestedProjectLink: "",
        interestedProjectDescription: "",
        learningSkills: "",
        skilledIn: "",

        email: "",
        twitter: "",
        facebook: "",
        instagram: "",
        youTube: "",

        articles: "",
        portfolio: "",
        resume: "",

        selectedSkills: [],
        selectedAddOns: [],

        gitHub: "",
        linkdin: "",
        medium: "",
        codepen: "",
        devTo: "",
        codeSandBox: "",
        stackOverflow: "",
        leetCode: "",
        behance: "",
        discord: "",
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const saveData = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.removeItem("formData");
            localStorage.setItem("formData", JSON.stringify(formData));
            navigate('/preview');
        } else {
            console.log('Form validation failed');
        }
    };

    // Validation logic
    const validate = () => {
        let formIsValid = true;
        let newErrors = { ...errors };

        // Title validation (must be "Mr." or "Ms.")
        if (formData.title?.trim().length > 5) {
            formIsValid = false;
            newErrors.title = 'Maximun 5 characters allowed';
        }

        // Name validation (must have at least 3 characters)
        if (!formData.name?.trim()) {
            formIsValid = false;
            newErrors.name = 'Name is required';
        } else if ((formData.name?.trim().length < 3) && (formData.name?.trim().length > 20)) {
            formIsValid = false;
            newErrors.name = 'Minimum 3 & Maximun 20 characters allowed';
        }

        if (!formData.workTitle?.trim()) {
            formIsValid = false;
            newErrors.workTitle = 'Work title is required';
        } else if ((formData.workTitle?.trim().length < 3) && (formData.workTitle?.trim().length > 50)) {
            formIsValid = false;
            newErrors.workTitle = 'Minimum 3 & Maximun 50 characters allowed';
        }

        if (formData.aboutMe?.trim().length > 500) {
            formIsValid = false;
            newErrors.aboutMe = 'Maximun 500 characters allowed';
        }

        // Current Project
        if ((formData.currentProjectName) && (/[^a-zA-Z\s]/.test(formData.currentProjectName))) {
            formIsValid = false;
            newErrors.currentProjectName = 'Special characters not allowed';
        } else if (formData.currentProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectName = 'Maximun 50 characters allowed';
        }

        if ((formData.currentProjectLink) && (!urlRegex.test(formData.currentProjectLink))) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Invalid URL';
        } else if (formData.currentProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Maximun 50 characters allowed';
        }

        if (formData.currentProjectDecription?.trim().length > 100) {
            formIsValid = false;
            newErrors.currentProjectDecription = 'Maximun 100 characters allowed';
        }

        // Interested Project
        if ((formData.interestedProjectName) && (/[^a-zA-Z\s]/.test(formData.interestedProjectName))) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Special characters not allowed';
        } else if (formData.interestedProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Maximun 50 characters allowed';
        }

        if ((formData.interestedProjectLink) && (!urlRegex.test(formData.interestedProjectLink))) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Invalid URL';
        } else if (formData.interestedProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Maximun 50 characters allowed';
        }

        if (formData.interestedProjectDescription?.trim().length > 100) {
            formIsValid = false;
            newErrors.interestedProjectDescription = 'Maximun 100 characters allowed';
        }

        // Learning Skills
        if (formData.learningSkills?.trim()) {
            const input = formData.learningSkills.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.learningSkills = 'Only 5 skills allowed';
            }
        } else if (formData.learningSkills?.trim().length > 50) {
            formIsValid = false;
            newErrors.learningSkills = 'Maximun 50 characters allowed';
        }

        // Skilled In
        if (formData.skilledIn?.trim()) {
            const input = formData.skilledIn.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.skilledIn = 'Only 5 skills allowed';
            }
        } else if (formData.skilledIn?.trim().length > 50) {
            formIsValid = false;
            newErrors.skilledIn = 'Maximun 50 characters allowed';
        }

        // Email
        if ((formData.email) && (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
            formIsValid = false;
            newErrors.email = 'Invalid EmailID';
        } else if (formData.email?.trim().length > 50) {
            formIsValid = false;
            newErrors.email = 'Maximun 50 characters allowed';
        }

        // Twitter
        if (formData.twitter?.trim().length > 50) {
            formIsValid = false;
            newErrors.twitter = 'Maximun 50 characters allowed';
        }

        // facebook
        if (formData.facebook?.trim().length > 50) {
            formIsValid = false;
            newErrors.facebook = 'Maximun 50 characters allowed';
        }

        // instagram
        if (formData.instagram?.trim().length > 50) {
            formIsValid = false;
            newErrors.instagram = 'Maximun 50 characters allowed';
        }

        // youTube
        if (formData.youTube?.trim().length > 50) {
            formIsValid = false;
            newErrors.youTube = 'Maximun 50 characters allowed';
        }

        // articles
        if ((formData.articles) && (!urlRegex.test(formData.articles))) {
            formIsValid = false;
            newErrors.articles = 'Invalid URL';
        } else if (formData.articles?.trim().length > 50) {
            formIsValid = false;
            newErrors.articles = 'Maximun 50 characters allowed';
        }

        // portfolio
        if ((formData.portfolio) && (!urlRegex.test(formData.portfolio))) {
            formIsValid = false;
            newErrors.portfolio = 'Invalid URL';
        } else if (formData.portfolio?.trim().length > 50) {
            formIsValid = false;
            newErrors.portfolio = 'Maximun 50 characters allowed';
        }

        // resume
        if ((formData.resume) && (!urlRegex.test(formData.resume))) {
            formIsValid = false;
            newErrors.resume = 'Invalid URL';
        } else if (formData.resume?.trim().length > 50) {
            formIsValid = false;
            newErrors.resume = 'Maximun 50 characters allowed';
        }

        // GitHub
        if (!formData.gitHub?.trim()) {
            formIsValid = false;
            newErrors.gitHub = 'Github is required';
        } else if (formData.gitHub?.trim().length > 50) {
            formIsValid = false;
            newErrors.gitHub = 'Maximun 50 characters allowed';
        }

        // linkdin
        if (formData.linkdin?.trim().length > 50) {
            formIsValid = false;
            newErrors.linkdin = 'Maximun 50 characters allowed';
        }

        // medium
        if (formData.medium?.trim().length > 50) {
            formIsValid = false;
            newErrors.medium = 'Maximun 50 characters allowed';
        }

        // codepen
        if (formData.codepen?.trim().length > 50) {
            formIsValid = false;
            newErrors.codepen = 'Maximun 50 characters allowed';
        }

        // devTo
        if (formData.devTo?.trim().length > 50) {
            formIsValid = false;
            newErrors.devTo = 'Maximun 50 characters allowed';
        }

        // codeSandBox
        if (formData.codeSandBox?.trim().length > 50) {
            formIsValid = false;
            newErrors.codeSandBox = 'Maximun 50 characters allowed';
        }

        // stackOverflow
        if (formData.stackOverflow?.trim().length > 50) {
            formIsValid = false;
            newErrors.stackOverflow = 'Maximun 50 characters allowed';
        }

        // leetCode
        if (formData.leetCode?.trim().length > 50) {
            formIsValid = false;
            newErrors.leetCode = 'Maximun 50 characters allowed';
        }

        // behance
        if (formData.behance?.trim().length > 50) {
            formIsValid = false;
            newErrors.behance = 'Maximun 50 characters allowed';
        }

        // discord
        if (formData.discord?.trim().length > 50) {
            formIsValid = false;
            newErrors.discord = 'Maximun 50 characters allowed';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        setFormData((prevData) => {

            // Selected Skills
            if (name === "selectedSkills") {
                const updatedSkills = checked
                    ? [...prevData.selectedSkills, value] // Add skill
                    : prevData.selectedSkills.filter((id) => id !== value); // Remove skill

                return { ...prevData, selectedSkills: updatedSkills };
            }

            // Add Ons
            if (name === "selectedAddOns") {
                const updatedAddOns = checked
                    ? [...prevData.selectedAddOns, value] // Add skill
                    : prevData.selectedAddOns.filter((id) => id !== value); // Remove skill

                return { ...prevData, selectedAddOns: updatedAddOns };
            }

            return { ...prevData, [name]: value };
        });

        // Clear error message when user starts typing
        if (value.trim()) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    return (
        <form onSubmit={saveData}>
            <div className="flex justify-between items-center w-full">
                <h6 className="text-5xl mb-5 primary-color font-semibold">GitHub Profile README Generator</h6>
                <button className="primary-button flex pr-6 pl-3 py-2 font-semibold">
                    <img src={`../gifs/star.gif`} className="w-5 h-5 mr-2 mt-1" /> Star this repo
                </button>
            </div>
            <hr />

            <div className="grid grid-cols-2 gap-1 mt-3">
                <div className="grid grid-cols-3">
                    <div>
                        <TextBox icon="right-arrow.png" placeholder="Enter title, e.g., Mr., Ms." name={"title"} value={formData.title} onChange={handleChange} />
                        {errors.title && <span style={{ color: '#fff' }}>{errors.title}</span>}
                    </div>
                    <div className="col-span-2">
                        <TextBox icon="user.png" placeholder="Enter your name" name={"name"} value={formData.name} onChange={handleChange} />
                        {errors.name && <span style={{ color: '#fff' }}>{errors.name}</span>}
                    </div>
                    <div className="col-span-3">
                        <TextBox icon="search.png" placeholder="Enter your work title" name={"workTitle"} value={formData.workTitle} onChange={handleChange} />
                        {errors.workTitle && <span style={{ color: '#fff' }}>{errors.workTitle}</span>}
                    </div>
                </div>
                <div className="flex mt-7" style={{ borderBottom: "2px solid #81fdff" }}>
                    <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="../icons/info.png" className="w-10 h-10" />
                    </span>
                    <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="aboutMe" value={formData.aboutMe} rows="6" cols="60" placeholder="About me..." onChange={handleChange}></textarea>
                    {errors.aboutMe && <span style={{ color: '#fff' }}>{errors.aboutMe}</span>}
                </div>
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">About myself</h6>
            <hr></hr>

            {/* Current project */}
            <div className="grid grid-cols-3 gap-1 mt-3">
                <div>
                    <TextBox icon="contribution.png" placeholder="Currently I'm contributing in e.g, Project name" value={formData.currentProjectName} name={"currentProjectName"} onChange={handleChange} />
                    {errors.currentProjectName && <span style={{ color: '#fff' }}>{errors.currentProjectName}</span>}
                </div>
                <div>
                    <TextBox icon="contribution.png" placeholder="Project link e.g, www.chatbot.com" value={formData.currentProjectLink} name={"currentProjectLink"} onChange={handleChange} />
                    {errors.currentProjectLink && <span style={{ color: '#fff' }}>{errors.currentProjectLink}</span>}
                </div>
                <div>
                    <TextBox icon="contribution.png" placeholder="Project description" value={formData.currentProjectDecription} name={"currentProjectDecription"} onChange={handleChange} />
                    {errors.currentProjectDecription && <span style={{ color: '#fff' }}>{errors.currentProjectDecription}</span>}
                </div>
            </div>

            {/* Collaborate project */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="interested.png" placeholder="I'm interested in contributing to e.g, Project name" value={formData.interestedProjectName} name={"interestedProjectName"} onChange={handleChange} />
                    {errors.interestedProjectName && <span style={{ color: '#fff' }}>{errors.interestedProjectName}</span>}
                </div>
                <div>
                    <TextBox icon="interested.png" placeholder="Project link e.g, www.facebook.com" value={formData.interestedProjectLink} name={"interestedProjectLink"} onChange={handleChange} />
                    {errors.interestedProjectLink && <span style={{ color: '#fff' }}>{errors.interestedProjectLink}</span>}
                </div>
                <div>
                    <TextBox icon="interested.png" placeholder="Project description" value={formData.interestedProjectDescription} name={"interestedProjectDescription"} onChange={handleChange} />
                    {errors.interestedProjectDescription && <span style={{ color: '#fff' }}>{errors.interestedProjectDescription}</span>}
                </div>
            </div>

            {/* Current learning */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="skill-development.png" placeholder="I'm building my skills in e.g, Java" value={formData.learningSkills} name={"learningSkills"} onChange={handleChange} />
                    {errors.learningSkills && <span style={{ color: '#fff' }}>{errors.learningSkills}</span>}
                </div>
                <div>
                    <TextBox icon="network.png" placeholder="Feel free to reach out to me regarding e.g., Python, ReactJS" value={formData.skilledIn} name={"skilledIn"} onChange={handleChange} />
                    {errors.skilledIn && <span style={{ color: '#fff' }}>{errors.skilledIn}</span>}
                </div>
            </div>

            {/* Connect with me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="email.png" placeholder="Connect with me here e.g., siddhantk951@gmail.com" value={formData.email} name={"email"} onChange={handleChange} />
                    {errors.email && <span style={{ color: '#fff' }}>{errors.email}</span>}
                </div>
                <div>
                    <TextBox icon="article.png" placeholder="I frequently publish articles about e.g., www.medium.com/@siddhantk951" value={formData.articles} name={"articles"} onChange={handleChange} />
                    {errors.articles && <span style={{ color: '#fff' }}>{errors.articles}</span>}
                </div>
            </div>

            {/* About me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="briefcase.png" placeholder="Take a look at my portfolio e.g., www.siddhantportfolio.site" value={formData.portfolio} name={"portfolio"} onChange={handleChange} />
                    {errors.portfolio && <span style={{ color: '#fff' }}>{errors.portfolio}</span>}
                </div>
                <div>
                    <TextBox icon="personal-profile.png" placeholder="Here’s a summary of my professional experience e.g., www.siddhantresume.site" value={formData.resume} name={"resume"} onChange={handleChange} />
                    {errors.resume && <span style={{ color: '#fff' }}>{errors.resume}</span>}
                </div>
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Skills</h6>
            <hr />

            {allSkills.map((skillCategory) => (
                <div key={skillCategory.title} className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{skillCategory.title}:</h3>
                    <ul className="grid w-full gap-10 md:grid-cols-6">
                        {skillCategory.array.map((skill) => (
                            <li key={skill.id}>
                                <IconCheckbox id={`${skill.id}-option`} name={"selectedSkills"} value={skill.id} onChange={handleChange} icon={skill.icon} checked={formData.selectedSkills.includes(skill.id)} label={skill.label} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))};

            {/* Networking */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Networking</h6>
            <hr></hr>

            <div className="grid grid-cols-8 gap-8 mt-3">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="github.png" placeholder="GitHub e.g., SiddhantKadam" value={formData.gitHub} name={"gitHub"} onChange={handleChange} />
                    {errors.gitHub && <span style={{ color: '#fff' }}>{errors.gitHub}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="twitter.png" placeholder="Twitter e.g., siddhantk98" value={formData.twitter} name={"twitter"} onChange={handleChange} />
                    {errors.twitter && <span style={{ color: '#fff' }}>{errors.twitter}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="medium.png" placeholder="Medium e.g., @siddhantk951" value={formData.medium} name={"medium"} onChange={handleChange} />
                    {errors.medium && <span style={{ color: '#fff' }}>{errors.medium}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="codepen.svg" placeholder="Codepen e.g., Siddhant98" value={formData.codepen} name={"codepen"} onChange={handleChange} />
                    {errors.codepen && <span style={{ color: '#fff' }}>{errors.codepen}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="linkedin.png" placeholder="LinkdIn e.g., siddhant-kadam-2883821a1" value={formData.linkdin} name={"linkdin"} onChange={handleChange} />
                    {errors.linkdin && <span style={{ color: '#fff' }}>{errors.linkdin}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="dev.png" placeholder="Dev.to e.g., Siddhant98" value={formData.devTo} name={"devTo"} onChange={handleChange} />
                    {errors.devTo && <span style={{ color: '#fff' }}>{errors.devTo}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="code-sandbox.svg" placeholder="Codesandbox e.g., Siddhant98" value={formData.codeSandBox} name={"codeSandBox"} onChange={handleChange} />
                    {errors.codeSandBox && <span style={{ color: '#fff' }}>{errors.codeSandBox}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="stackoverflow.png" placeholder="Stackoverflow e.g., Siddhant98" value={formData.stackOverflow} name={"stackOverflow"} onChange={handleChange} />
                    {errors.stackOverflow && <span style={{ color: '#fff' }}>{errors.stackOverflow}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="leetcode.svg" placeholder="Leetcode e.g., Siddhant98" value={formData.leetCode} name={"leetCode"} onChange={handleChange} />
                    {errors.leetCode && <span style={{ color: '#fff' }}>{errors.leetCode}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="behance.png" placeholder="Behance e.g., Siddhant98" value={formData.behance} name={"behance"} onChange={handleChange} />
                    {errors.behance && <span style={{ color: '#fff' }}>{errors.behance}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="facebook.png" placeholder="Facebook e.g., siddhant.kadam.583" value={formData.facebook} name={"facebook"} onChange={handleChange} />
                    {errors.facebook && <span style={{ color: '#fff' }}>{errors.facebook}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="instagram.png" placeholder="Instagram e.g., igl_elijah" value={formData.instagram} name={"instagram"} onChange={handleChange} />
                    {errors.instagram && <span style={{ color: '#fff' }}>{errors.instagram}</span>}
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="youtube.png" placeholder="Youtube e.g., @elijah-game-zone" value={formData.youTube} name={"youTube"} onChange={handleChange} />
                    {errors.youTube && <span style={{ color: '#fff' }}>{errors.youTube}</span>}
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="discord.png" placeholder="Discord e.g., igl_elijah" value={formData.discord} name={"discord"} onChange={handleChange} />
                    {errors.discord && <span style={{ color: '#fff' }}>{errors.discord}</span>}
                </div>
            </div>

            {/* Additional features */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Additional features</h6>
            <hr />

            <ul className="mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid sm:grid-cols-3 sm:grid-rows-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {addOns.map((add) => (
                    <li key={add.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input
                                id={`${add.id}-option`}
                                type="checkbox"
                                name="selectedAddOns"
                                value={add.id}
                                onChange={handleChange}
                                checked={formData.selectedAddOns.includes(add.id)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label htmlFor={`${add.id}-option`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {add.label}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>


            <div className="flex justify-center items-center">
                <button type="submit" className="primary-button flex px-3 py-2 mt-5 font-semibold">
                    Select the template <img src={`../icons/next.png`} className="w-5 h-5 ml-2 mt-1" />
                </button>
            </div>

        </form>

    )
}

export default Form;