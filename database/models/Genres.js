module.exports = (sequelize, dataTypes)=>{
    let alias = 'genres';
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
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
    };
    let config = {
        tableName : 'genres',
        timestamps : true
    };
// Relacion de tablas
/*
    const Genres = sequelize.define(alias, cols, config);
        Genres.associate = function(models) {
            Genres.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Genres.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
    return Genres;
    */
}