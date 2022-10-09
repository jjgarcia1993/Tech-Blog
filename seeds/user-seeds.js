const { User } = require('../models');

const userData = [
    {
        username: "TimmieJay",
        email: "timmyj121@gmail.com",
        password: "password1234"
    },
    {
        username: "NovaUF",
        email: "Novaroundtheworld@gmail.com",
        password: "password1234"
    },
    {
        username: "HykerFry",
        email: "hppfry@gmail.com",
        password: "password1234"
    },
    {
        username: "Sorolopolo",
        email: "soropi@gmail.com",
        password: "password1234"
    },
    {
        username: "Canaly",
        email: "CNjustice@gmail.com",
        password: "password1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;