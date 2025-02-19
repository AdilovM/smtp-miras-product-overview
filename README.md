## Products API

**Overview**: Served the individual product data and its various related components, including related items and individual styles. Further documentation can be found in the Products-API.

**Technologies Used:** NodeJS, Express, MongoDB, Mongoose, Amazon EC2, and Redis. 

**Developed by:** [@adilovm](https://github.com/adilovm)

## Docker

To run the application using Docker, first clone the repository onto your local system, and build using the following command: 

    docker build . -t your-image-name

Then run the container using the following command: 

    sudo docker run \
	    -detached \
	    --restart unless-stopped \
	    -p 3000:3000
	    -e DB_HOST= \
	    -e DB_USER= \
	    -e DB_PASS= \
	    -e REDIS_PASS= \
	    -e REDIS_URL= \
	    --name=your-image-name \

## GET Products

`/products`

Yields the following data output: 

```json
[{
        "product_id": 1,
        "name": "Camo Onesie",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": 140
    },
    {
        "product_id": 2,
        "name": "Bright Future Sunglasses",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": 69
    },
    {
        "product_id": 3,
        "name": "Morning Joggers",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": 40
    },
    {
        "product_id": 4,
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit.",
        "category": "Pants",
        "default_price": 65
    },
    {
        "product_id": 5,
        "name": "Heir Force Ones",
        "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
        "category": "Kicks",
        "default_price": 99
    }
]
```

## GET Specific Product

`/products/:product_id`

Yields the following data output: 

```json
{
    "product_id": 1,
    "name": "Camo Onesie",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": 140,
    "features": [{
        "feature": "Fabric",
        "value": "Canvas"
    }, {
        "feature": "Buttons",
        "value": "Brass"
    }]
}
```
## GET Specific Product Styles

`/products/:product_id/styles`

Yields the following data output: 

```json
{
    "styles": [{
        "id": 1,
        "name": "Forest Green & Black",
        "original_price": 140,
        "default_style": true,
        "photos": [{
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }],
        "skus": [{
            "id": 1,
            "size": "XS",
            "quantity": 8
        }, {
            "id": 2,
            "size": "S",
            "quantity": 16
        }, {
            "id": 3,
            "size": "M",
            "quantity": 17
        }, {
            "id": 4,
            "size": "L",
            "quantity": 10
        }, {
            "id": 5,
            "size": "XL",
            "quantity": 15
        }, {
            "id": 6,
            "size": "XL",
            "quantity": 4
        }]
    }, {
        "id": 2,
        "name": "Desert Brown & Tan",
        "original_price": 140,
        "default_style": false,
        "photos": [{
            "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }, {
            "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80",
            "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }],
        "skus": [{
            "id": 8,
            "size": "XS",
            "quantity": 8
        }, {
            "id": 7,
            "size": "S",
            "quantity": 16
        }, {
            "id": 9,
            "size": "M",
            "quantity": 17
        }, {
            "id": 10,
            "size": "L",
            "quantity": 10
        }, {
            "id": 11,
            "size": "XL",
            "quantity": 15
        }, {
            "id": 12,
            "size": "XXL",
            "quantity": 6
        }]
    }]
}
```
## GET Related Products

`/products/:product_id/related`

Yields the following data output: 

```json
[
	2,
	3,
	8,
	7
]
```

## Search for Products by Name

`/products/s?s=camo`

Yields the following data output: 

```json
[
   {
      "product_id":1,
      "name":"Camo Onesie",
      "description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category":"Jackets",
      "default_price":140,
      "features":[
         {
            "feature":"Fabric",
            "value":"Canvas"
         },
         {
            "feature":"Buttons",
            "value":"Brass"
         }
      ]
   }
]
```

