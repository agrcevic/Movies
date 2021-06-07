module.exports = (sequelize, dataTypes)=>{
    let alias = 'Seasons';
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
        number: {
            type: dataTypes.INTEGER,
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
        serie_id: {
            type: dataTypes.INTEGER,
            allowNull:true
        },
    };
    let config = {
        tableName : 'seasons',
        timestamps : true
    };
// Relacion de tablas

    const Seasons = sequelize.define(alias, cols, config);
     return Seasons;
      /*  Seasons.associate = function(models) {
            Seasons.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Seasons.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
   
    */
   
} 