# sys-messge-queue-shopDev
### Init
- [ ] zxx

``` shell 
mkdir -p src/{config,dbs,models,services,tests,utils}
```
- [ ] create env
``` shell
touch .env local.env
```

- [ ] install rabbitmq for node:

```shell
npm i --save amqplib
```

- [ ] install dependencies:
```shell
npm i --save dotenv lodash mongoose 
```

- [ ] insatll jest for test:
```shell
npm i jest --save-dev
```
- [ ] init git
- [ ] create .gitignore
- add line node_modules to .gitignore
- remember cp file content .env to .env.example and remove values.


- [ ] init amqp
```sh
touch src/dbs/init.rabbit.js
```