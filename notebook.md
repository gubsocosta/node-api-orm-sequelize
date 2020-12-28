# Tips

## Sequelize-CLI Commands

### Make model and migration

```
$ npx sequelize-cli model:create --name <model_name> --attributes <attribute>:<type>,<attribute>:<type>,<attribute>:<type>,...
```

### Run migrations

```
$ npx sequelize-cli db:migrate
```

### Create seeder

```
$ npx sequelize-cli seed:generate --name <seeder_name>
```
