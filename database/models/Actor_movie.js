module.exports = (sequelize, dataTypes)=>{
    let alias = 'Actor_movie';
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
           // allowNull: true
        },
        movie_id: {
            type: dataTypes.INTEGER,
            //allowNull: true
        },
        
    };
    let config = {
       tableName : 'actor_movie',
        timestamps : false
    };
// Relacion de tablas

   const Actor_movie = sequelize.define(alias, cols, config);
   return Actor_movie
   /*
   Actor_movie.associate = function(models) {
       Actor_movie.belongsTo(models.Genres, {
           as: "genres",
           foreignKey : "genre_id"
       });
       Actor_movie.belongsToMany(models.Actors, {
           as: "actors",
           through: "actor_movie",
           foreignKey : "movie_id",
           otherKey: "actor_id",
           timestamps: true
            });
    }
*/
}
