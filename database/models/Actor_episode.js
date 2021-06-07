module.exports = (sequelize, dataTypes)=>{
    let alias = 'Actor_episode';
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

   const Actor_episode = sequelize.define(alias, cols, config);
   return Actor_episode
      /* Movies.associate = function(models) {
            Movies.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genere_id"
            });
            
            Movies.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }

   */
}
