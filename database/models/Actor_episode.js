module.exports = (sequelize, dataTypes)=>{
    let alias = 'actorsactor_episode';
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
        actor_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        episode_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        
    };
    let config = {
        tableName : 'actor_episode',
        timestamps : true
    };
// Relacion de tablas
/*
    const Actor_episode = sequelize.define(alias, cols, config);
        Actor_episode.associate = function(models) {
            Actor_episode.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Actor_episode.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
    return Movies;
    */
    return Actor_episode;
}