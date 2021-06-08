module.exports = (sequelize, dataTypes)=>{
    let alias = 'Actors';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true,
            autoIncrement: true,
        },

        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },

        first_name: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        last_name: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },

        favorite_movie_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    };
    let config = {
        tableName : 'actors',
        timestamps : true
    };
// Relacion de tablas 
    const Actors = sequelize.define(alias, cols, config);

    Actors.associate = function(models) {

        Actors.belongsToMany(models.Movies, {
            as: "movies",
            through: "actor_movie",
            foreignKey : "actor_id",
            otherKey: "movie_id",
            timestamps: true
        });
    }
    return Actors;
}