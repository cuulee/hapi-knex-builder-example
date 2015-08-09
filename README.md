# Hapi.js Knex Middleware Example
Example application that uses the hapi-knex-builder Hapijs plugin (https://github.com/dennismonsewicz/hapi-knex-builder)
to aid with writing pesky SQL statements every time you need to account for pagination/sorting/etc in your routes.

## Setup

```
git clone git@github.com:dennismonsewicz/hapi-knex-middleware-example.git
cd hapi-knex-middleware-example
npm install
node src/ --env-config config/local.json
Server is running on http://localhost:2345
```

## Examples

## Pagination
```
$ curl -X GET http://127.0.0.1:2345/example\?limit\=2\&offset\=6
$ select count(`count(*)`) as `count` from `tbl`
```

## Sorting
```
$ curl -X GET http://127.0.0.1:2345/example\?sort_by\=name\&sort_dir\=desc
$ select * from `tbl` order by name desc
```

## Count
```
$ curl -X GET http://127.0.0.1:2345/example\?count\=true
$ select count(`count(*)`) as `count` from `tbl`
```

## Without Query Params
```
$ curl -X GET http://127.0.0.1:2345/example
$ select * from `tbl`
```
