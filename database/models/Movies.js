module.exports = (sequelize, dataTypes)=>{
    let alias = 'Movies';
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
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    };
    let config = {
        tableName : 'Movies',
        timestamps : true
    };
// Relacion de tablas

    const Movies = sequelize.define(alias, cols, config);
        Movies.associate = function(models) {
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

   return Movies;
}
