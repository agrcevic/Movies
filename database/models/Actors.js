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
    return Actors;
    
        Movies.associate = function(models) {
            Movies.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Movies.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
   
    
    
}