# Tips

## Sequelize-CLI Commands

### Make model and migration

```
$ npx sequelize-cli model:create --name [model_name] --attributes [attribute]:[type],[attribute]:[type],[attribute]:[type],...
```

### Run migrations

```
$ npx sequelize-cli db:migrate
```

### Undo last migration

```
$ npx sequelize-cli db:migrate:undo
```

### Undo the specific migration

```
$ npx sequelize-cli db:migrate:undo --name [date_time]-create-[table_name].js
```

### Create seed

```
$ npx sequelize-cli seed:generate --name [seed_name]
```

### Run seeds

```
$ npx sequelize-cli db:seed:all
```

### Undo the last seed

```
$ npx sequelize-cli db:seed:undo
```

### Undo the specific seed

```
$ npx sequelize-cli db:seed:undo --seed [file_name]
```

### Undo all seeds

```
$ npx sequelize-cli db:seed:undo:all
```
