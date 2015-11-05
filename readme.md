# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Super CRUD

## Base URL

<a href="https://super-crud.herokuapp.com" target="_blank">https://super-crud.herokuapp.com</a>

## Books Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/books` | READS all books |
| POST | `/books` | CREATES new book |
| GET | `/books/:id` | READS one book |
| PUT | `/books/:id` | UPDATES one book |
| DELETE | `/books/:id` | DELETES one book |

#### Sample Response

GET `/books`

```js
{
  books: [
    {
      _id: "563970891719c56cac83e5bb",
      title: "Around the World in 80 Days",
      author: "Jules Verne",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
      releaseDate: "January 30, 1873",
      __v: 0
    },
    {
      _id: "563970891719c56cac83e5bc",
      title: "The Four Hour Workweek",
      author: "Tim Ferriss",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
      releaseDate: "April 1, 2007",
      __v: 0
    }
  ]
}
```

## Wines Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/wines` | READS all wines |
| POST | `/wines` | CREATES new wine |
| GET | `/wines/:id` | READS one wine |
| PUT | `/wines/:id` | UPDATES one wine |
| DELETE | `/wines/:id` | DELETES one wine |

#### Sample Response

GET `/wines`

```js
{
  wines: [
    {
      _id: "563970891719c56cac83e5c4",
      name: "Chateau Le Doyenne",
      year: "2005",
      country: "France",
      description: "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892242/288a66cc-8157-11e5-8080-94b5847539e2.jpg",
      price: 12,
      __v: 0
    },
    {
      _id: "563970891719c56cac83e5c5",
      name: "Chateau de Saint Cosme",
      year: "2009",
      country: "France",
      description: "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892244/288afc2c-8157-11e5-8ae6-5a9e1c5ce6ac.jpg",
      price: 13,
      __v: 0
    }
  ]
}
```

## Reset Seed Data

<a href="http://super-crud.herokuapp.com/reset" target="_blank">http://super-crud.herokuapp.com/reset</a>