const homelist = (req, res) => {
    res.render('index', {
        title: 'Food Finder'
    })
}

const restaurantList = (req, res) => {
    res.render('restaurant-list', {
        title: 'Restaurant List',
        restaurants: [{
            title: "Minerva",
            rating: 3,
            class: "Banjara-Hills restaurant"
        }, {
            title: "Blue Fox",
            rating: 4,
            class: "Banjara-Hills restaurant"
        }, {
            title: "Chef's Spot",
            rating: 5,
            class: "Banjara-Hills restaurant"
        }, {
            title: "Savory Bites",
            rating: 4.2,
            class: "Mehdipatnam restaurant"
        },
        {
            title: "Green Garden Grill",
            rating: 4.5,
            class: "Mehdipatnam restaurant"
        },
        {
            title: "Tasty Delights",
            rating: 3.8,
            class: "Jubilee-Hills restaurant"
        },
        {
            title: "Spice Fusion",
            rating: 4.7,
            class: "Jubilee-Hills restaurant"
        },
        {
            title: "Cafe Mocha",
            rating: 4.0,
            class: "Narayanguda restaurant"
        },
        {
            title: "Ocean View Restaurant",
            rating: 4.3,
            class: "Himayath-Nagar restaurant"
        },
        {
            title: "Sunset Cafe",
            rating: 4.6,
            class: "Himayath-Nagar restaurant"
        }]
    })
}

const about = (req, res) => {
    res.render('about', {
        title: 'About'
    })
}

module.exports = {
    homelist,
    restaurantList,
    about
}