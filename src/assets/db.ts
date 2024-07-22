export interface Review {
    author: string;
    date: string;
    content: string;
    rating: number; // от 1 до 5
  }
  export interface Item {
    id: number;
    image: string;
    title: string;
    price: number;
    onSale: boolean;
    inStock: boolean;
    discount: number | null; // Может быть числом или null
    category: string;
    reviews: Review[];
  }
     
  export const data: Item[] =  [
      {
        "id": 1,
        "image": "/img/items/01.jpg",
        "title": "Lira Earrings",
        "price": 29.99,
        "onSale": true,
        "inStock": true,
        "discount": 10,
        "category": "Jewelry",
        "reviews": [
          {
            "author": "John Doe",
            "date": "2023-07-15",
            "content": "Great earrings, love the design!",
            "rating": 5
          },
          {
            "author": "Jane Smith",
            "date": "2023-07-16",
            "content": "Good quality for the price.",
            "rating": 4
          },
          {
            "author": "Mike Johnson",
            "date": "2023-07-17",
            "content": "Average, not bad.",
            "rating": 3
          }
        ]
      },
      {
        "id": 2,
        "image": "/img/items/02.jpg",
        "title": "Hal Earrings",
        "price": 24.99,
        "onSale": false,
        "inStock": true,
        "discount": null,
        "category": "Jewelry",
        "reviews": [
          {
            "author": "Alice Brown",
            "date": "2023-07-10",
            "content": "Not what I expected.",
            "rating": 2
          },
          {
            "author": "Bob Martin",
            "date": "2023-07-12",
            "content": "Nice but could be better.",
            "rating": 3
          }
        ]
      },
      {
        "id": 3,
        "image": "/img/items/03.jpg",
        "title": "Kaede Hair Pin Set Of 3",
        "price": 19.99,
        "onSale": true,
        "inStock": false,
        "discount": 15,
        "category": "Hair Accessories",
        "reviews": [
          {
            "author": "Carol King",
            "date": "2023-07-18",
            "content": "Lovely set, very practical.",
            "rating": 4
          },
          {
            "author": "David Green",
            "date": "2023-07-19",
            "content": "Quality could be improved.",
            "rating": 3
          }
        ]
      },
      {
        "id": 4,
        "image": "/img/items/04.jpg",
        "title": "Hair Pin Set of 3",
        "price": 15.99,
        "onSale": false,
        "inStock": true,
        "discount": null,
        "category": "Hair Accessories",
        "reviews": [
          {
            "author": "Emma White",
            "date": "2023-07-20",
            "content": "Great value for money.",
            "rating": 5
          }
        ]
      },
      {
        "id": 5,
        "image": "/img/items/05.jpg",
        "title": "Plaine Necklace",
        "price": 34.99,
        "onSale": true,
        "inStock": true,
        "discount": 20,
        "category": "Jewelry",
        "reviews": [
          {
            "author": "Frank Thomas",
            "date": "2023-07-14",
            "content": "Elegant and beautiful.",
            "rating": 5
          },
          {
            "author": "Grace Lee",
            "date": "2023-07-15",
            "content": "Good for special occasions.",
            "rating": 4
          }
        ]
      },
      {
        "id": 6,
        "image": "/img/items/06.jpg",
        "title": "Yuki Hair Pin Set of 3",
        "price": 21.99,
        "onSale": false,
        "inStock": false,
        "discount": null,
        "category": "Hair Accessories",
        "reviews": [
          {
            "author": "Hannah Wilson",
            "date": "2023-07-16",
            "content": "Stylish and affordable.",
            "rating": 4
          }
        ]
      }
    ]

  