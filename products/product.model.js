const {DataTypes} = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        name: {type: DataTypes.STRING, allowNull: false},
        quantity: {type: DataTypes.INTEGER, allowNull: false},
        price: {type: DataTypes.INT, allowNull: false},
        image: {type: DataTypes.STRING, allowNull: false}
    };

    const options = {
        // Options for defining the model
    };

    return sequelize.define('Product', attributes, options);
}
