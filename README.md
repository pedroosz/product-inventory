## Inventory system

This is a simple inventory system, where you can create, read, update, and delete products.

### Endpoints

```
GET    /products     - get all products
GET    /products/:id - get a specific product
POST   /products     - create a new product
PUT    /products/:id - update a product
DELETE /products/:id - delete a product
```

### Getting started

##### Dependencies

Just run `npm install` or `yarn` to install all dependencies. 

##### Set up prisma

`npx prisma init --datasource-provider sqlite`

##### Run migration

now we need to run a migration in order to create our `Products` table

`npx prisma migrate dev --name init`

##### Run the project

and finally run the project!

`npm run dev`

### Example responses

#### /products (GET)

```
[
  {
    "id": 1,
    "name": "Super cool thing",
    "price": 2,
    "qty": 30,
    "created_at": "2022-12-05T17:53:12.243Z"
  }
]
```

#### /products/:id (GET)
*assuming that the id we queried is 1*
```
{
    "id": 1,
    "name": "Super cool thing",
    "price": 2,
    "qty": 30,
    "created_at": "2022-12-05T17:53:12.243Z"
}
```

#### /products (POST)
*example body*
```
{
  "name": "Super cool thing",
  "price": 2,
  "qty": 30
}
```
*response*
```
{
  "id": 1,
  "name": "Super cool thing",
  "price": 2,
  "qty": 30,
  "created_at": "2022-12-05T18:15:55.412Z"
}
```

#### /products/:id (PUT)
*example body*
```
{
  "name": "Super cool thing",
  "price": 5,
  "qty": 15
}
```
*response*
```
{
  "id": 1,
  "name": "Super cool thing",
  "price": 5,
  "qty": 15,
  "created_at": "2022-12-05T17:53:12.243Z"
}
```

#### /products/:id (DELETE)
```
200 OK, 404 Not Found or 500 Internal Server Error
```
