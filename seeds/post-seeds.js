const { Post } = require('../models');

const postData = [
    {
        title: 'Champions',
        post_text: 'The player-controlled characters in League of Legends. Each champion possesses unique abilities and attributes.',
        user_id: 1,
    },
    {
        title: 'Items',
        post_text: 'An item is a modular enhancement that the player can equip in-game, usually purchasable for gold Gold gold. Items are often fashioned into objects from Runeterran lore, otherwise following the theme of the games background setting.',
        user_id: 2,
    },
    {
        title: 'Runes',
        post_text: 'Runes are enhancements that add new abilities or buffs to the champion. The player can preset their runes before the match begins and during champion select.',
        user_id: 2,
    },
    {
        title: 'Summoner Spells',
        post_text: 'Summoner spells are abilities that players can use for their champions on the Fields of Justice.',
        user_id: 3,
    },
    {
        title: 'Minions',
        post_text: 'Minions are units that comprise the main force sent by the Nexus. They spawn periodically from their Nexus and advance along a lane towards the enemy Nexus, automatically engaging any enemy unit or structure they encounter. They are controlled by artificial intelligence and only use basic attacks.',
        user_id: 4,
    },
    {
        title: 'Monsters',
        post_text: 'Monsters are neutral units in League of Legends. Unlike minions, monsters do not fight for either team, and will only do so if provoked.',
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;