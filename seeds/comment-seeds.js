const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "League fandom?",
        post_id: 3,
        user_id: 1
    },
    {
        comment_text: "Heck yeah! Who else is watching worlds this year?",
        post_id: 1,
        user_id: 4
    },
    {
        comment_text: "Who isn't? Although it could be better this year.",
        post_id: 4,
        user_id: 2
    },
    {
        comment_text: "I think Europe is going to take it this year.",
        post_id: 4,
        user_id: 3
    },
    {
        comment_text: "LOL OKAY",
        post_id: 5,
        user_id: 5
    },
    {
        comment_text: "THIS GUY AHAHAHAHA. ",
        post_id: 5,
        user_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;