# BEQUANT TEST PRICE SERVICE
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSpring-Boot-Framework%2FSpring-Boot-Application-Template.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FSpring-Boot-Framework%2FSpring-Boot-Application-Template?ref=badge_shield)

This is the Bequant test price service API code

## Built With


* 	[Typescript](https://www.typescriptlang.org/) - Typed Javascript at scale.
* 	[NPM](https://npm.org/) - Dependency Management
* 	[Nodjes](http://nodejs.org) - Nodejs Runtime version 12.16.1
* 	[Express](https://expressjs.com/) - Framework to ease the bootstrapping and development of nodejs Applications
* 	[Mongodb](https://www.mongodb.com/) - Database platform
* 	[git](https://git-scm.com/) - Free and Open-Source distributed version control system 


## External Tools Used

* [Postman](https://www.getpostman.com/) - API Development Environment (Testing Docmentation)


## Running the application locally

To run the application

* cd into the root directory of the application
* Run the command `npm install`
* Create a file and name it .env in the root directory of the application
* copy the content of the .env.sample file and update it with the port you want the application to run on and the mongodb database URL to connect to
* Run the command `npm run dev`



## Documentation

* [API documentation](https://documenter.getpostman.com/view/10234227/SzRyy9K5?version=latest) - online, with code auto-generated snippets in cURL, jQuery, Java, Swift, Objective-C, Shell Ruby,Python Requests, Node, PHP and Go programming languages


## Files and Directories

The project (a.k.a. project directory) has a particular directory structure. A representative project is shown below:


.
├── BEQUANT-NODE-TEST
├── src
│   └── config
│   └── controller
│   └── dto
│   └── jobs
│   └── lib
│   └── middlewares
│   └── models
│   └── routes
│   └── services
│   └── websocket
│   └── app.ts
│   └── index.ts
├── .env
├── .env.sample
├── .gitignore
├── nodemon.json
├── package-lock.json
├── package.json
└── README.md
└── tsconfig.json


## packages

- `models` — to hold our database entities;
- `config` — reads the application configuration values from the .env;
- `middlewares` — It contains all the guards on the API request handlers. Eg is the authentication middlware;
- `services` — to hold our business logic;
- `routes` — It contains the API request handlers;
- `lib` — It contains all the utility functions used in the project
- `dto` — where the PriceModel is mapped to appropriate data for the view (`PriceOutputDTO`) and also for storage (`PriceInputDTO`)
- `jobs` - contains the scheduler for obtaining price information and saving it in DB
- `websocket` - contains the websocket server



## Resources

* [The 12factor app](https://12factor.net/)
* [My API Lifecycle Checklist and Scorecard](https://dzone.com/articles/my-api-lifecycle-checklist-and-scorecard)
* [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
