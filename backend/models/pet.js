'use strict';
module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define('Pet', {
        'id': {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING
    }, {
        classMethods: {
            tableName: 'pet',
            associate: function(models) {
                Pet.belongsTo(models.Person);
            }
        }
    });
    return Pet;
};