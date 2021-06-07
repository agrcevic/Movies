module.exports = (sequelize, dataTypes)=>{
    let alias = 'Series';
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
        release_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
        end_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    };
    let config = {
        tableName : 'series',
        timestamps : true
    };
// Relacion de tablas

    const Series = sequelize.define(alias, cols, config);
    return Series

       /* Series.associate = function(models) {
            Series.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Series.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
   */ 
    
    
}