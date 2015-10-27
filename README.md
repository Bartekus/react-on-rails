React-On-Rails
==============

## Synopsis
React.js Flux implementation utilizing rails backend with PostgreSQL.


## Motivation
Integrating React.js along with full frontend workflow (webpack&co) into Ruby-on-Rails framework.


## Screenshot
![Screenshot software](https://raw.githubusercontent.com/Bartekus/react-on-rails/master/react-on-rails.png "screenshot software")


## Installation
Checkout this repo, install dependencies, then start the server with the following:

```
  > git clone git@github.com:Bartekus/react-on-rails.git
  > cd react-on-rails
  > bundle
  > npm install
  > rails s
  > webpack -w -d
```


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## History

* 0.0.4 Added Flux & Dispatcher /Configured Action Stores for Server & Tweet /Added API + constants & dispatcher
* 0.0.3 Implemented tweet model/controller/view + extended its function with moment.js & gravatar libraries
* 0.0.2 Implemented basic structure with user model/controller/view + devise authentication, dependencies and functionality
* 0.0.1 First Commit

## Contact
#### Bartek Kus
* Homepage: http://bartekus.com
* E-mail: bartekus@gmail.com
* Twitter: [@Bartekus](https://twitter.com/Bartekus "Bartekus on twitter")


## License
Copyright (c) 2015 Bartek Kus
Licensed under the MIT license
