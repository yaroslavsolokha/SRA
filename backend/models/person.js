'use strict';
module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define('Person', {
        'id': {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        'first_name': DataTypes.STRING,
        'last_name': DataTypes.STRING,
        'email': DataTypes.STRING
    }, {
        tableName: 'people',
        classMethods: {
            associate: function(models) {
                Person.hasMany(models.Pet);
            }
        }
    });
    return Person;
};
