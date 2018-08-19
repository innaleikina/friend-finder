var friendsArr = [{
        name: "Bob",
        image: "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        answers: [1, 3, 2, 3, 5, 1, 1, 2, 4,2]
    },
    {
        name: "Anna",
        image: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/sphinxhed.png?itok=BjPw5VMm&resize=1100x619",
        answers: [2, 3, 5, 3, 5, 1, 4, 2, 4,1]
    },
    {
        name: "Thomas",
        image: "https://images-na.ssl-images-amazon.com/images/I/71ls03uttFL._SX355_.jpg",
        answers: [1, 3, 5, 3, 5, 1, 1, 4, 4,5]
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArr;