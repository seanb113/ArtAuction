const sequelize = require('sequelize')
const {Sequelize} = require('./index')
const {db} = require('../server')

const Painting = Sequelize.define('painting', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    painted_in: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes: {
        type: Sequelize.INTEGER,
    },

})

module.exports = Painting