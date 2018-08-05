export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public description: string,
        public image: string,
        public categories: string[]
        ) {}
}

export class Review {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public image: string,
        public comment: string,
        ) {
    }
}

export function getProducts(params = <any>{}): Product[] {
    let result = products;

    if (params.title) {
        result = result.filter(
            p => p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1);
    }
    if (parseInt(params.price) && result.length > 0) {
        result = result.filter(
            p => p.price <= parseInt(params.price));
    }
    if (params.category && result.length > 0) {
        result = result.filter(
            p => p.categories.indexOf(params.category.toLowerCase()) !== -1);
    }

    return result;
}

export function getProductById(productId: number): Product {
  return products.find(p => p.id === productId);
}

export function getReviewsByProductId(productId: number): Review[] {
  return reviews.filter(r => r.productId === productId);
}

var products = [
    {
        "id": 0,
        "title": "Google pixle 2",
        "price": 649,
        "rating": 4.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/google-pixel-02.jpg",
        "categories": ["cell phone"]
    },
    {
        "id": 1,
        "title": "Iphone X",
        "price": 999,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/iphoneX.jpg",
        "categories": ["cell phone"]
    },
    {
        "id": 2,
        "title": "Ipad Pro",
        "price": 649.99,
        "rating": 4.9,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/ipad.jpg",
        "categories": ["tablet"]
    },
    {
        "id": 3,
        "title": "Surface Pro",
        "price": 799,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/surface.jpg",
        "categories": ["computer","tablet"]
    },
    {
        "id": 4,
        "title": "Mac",
        "price": 1299,
        "rating": 5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/mac.jpg",
        "categories": ["computer"]
    },
    {
        "id": 5,
        "title": "Window Laptop",
        "price": 699.99,
        "rating": 4.1,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/windowLaptop.jpg",
        "categories": ["computer"]
    },
    {
        "id": 6,
        "title": "Window Desktop",
        "price": 1799,
        "rating": 4.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/windowDesktop.jpg",
        "categories": ["computer"]
    },
    {
        "id": 7,
        "title": "Samsung Tablet",
        "price": 349,
        "rating": 4.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/SamgsungTablet.jpg",
        "categories": ["tablet"]
    },
    {
        "id": 8,
        "title": "Ubuntu Laptop",
        "price": 846,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "/app/components/images/ubuntu_laptop.jpg",
        "categories": ["computer"]
    },
];
var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T11:45:00+00:00",
        "user": "User 7",
        "rating": 5,
        "image": "/app/components/images/google-pixel-02.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "image": "/app/components/images/iphoneX.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "productId": 0,
        "timestamp": "2014-05-20T11:46:00+00:00",
        "user": "User 9",
        "rating": 5,
        "image": "/app/components/images/ipad.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "productId": 0,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "User 4",
        "rating": 4,
        "image": "/app/components/images/surface.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "productId": 0,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "User 5",
        "rating": 5,
        "image": "/app/components/images/mac.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "productId": 0,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "User 6",
        "rating": 5,
        "image": "/app/components/images/windowLaptop.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 6,
        "productId": 0,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "User 3",
        "rating": 4,
        "image": "/app/components/images/windowDesktop.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 7,
        "productId": 0,
        "timestamp": "2014-05-20T11:44:00+00:00",
        "user": "User 8",
        "rating": 4.9,
        "image": "/app/components/images/SamsungTablet.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 8,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "image": "/app/components/images/ubuntu_laptop.jpg",
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
];
