# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Super CRUD

## Base URL

<a href="https://super-crud.herokuapp.com" target="_blank">https://super-crud.herokuapp.com</a>

## Books Endpoint

| HTTP Verb | URL | Functionality |
| :--- | :--- | :--- |
| GET | `/books` | READS all books |
| POST | `/books` | CREATES new book |
| GET | `/books/:id` | READS one book |
| PUT | `/books/:id` | UPDATES one book |
| DELETE | `/books/:id` | DESTROYS one book |

#### Sample Response

GET `/books`

```js
[
  {
    _id: "5638138df94ebc1100779afb",
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
    __v: 0
  },
  {
    _id: "5638138df94ebc1100779afc",
    title: "The Four Hour Workweek",
    author: "Tim Ferriss",
    image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
    __v: 0
  }
]
```

## Wines Endpoint

| HTTP Verb | URL | Functionality |
| :--- | :--- | :--- |
| GET | `/wines` | READS all wines |
| POST | `/wines` | CREATES new wine |
| GET | `/wines/:id` | READS one wine |
| PUT | `/wines/:id` | UPDATES one wine |
| DELETE | `/wines/:id` | DESTROYS one wine |

#### Sample Response

GET `/wines`

```js
[
  {
    _id: "5638138df94ebc1100779b03",
    name: "Chateau Le Doyenne",
    year: "2005",
    country: "France",
    description: "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
    image: "https://cloud.githubusercontent.com/assets/7833470/10892242/288a66cc-8157-11e5-8080-94b5847539e2.jpg",
    price: 12,
    __v: 0
  },
  {
    _id: "5638138df94ebc1100779b04",
    name: "Chateau de Saint Cosme",
    year: "2009",
    country: "France",
    description: "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
    image: "https://cloud.githubusercontent.com/assets/7833470/10892244/288afc2c-8157-11e5-8ae6-5a9e1c5ce6ac.jpg",
    price: 13,
    __v: 0
  }
]
```
