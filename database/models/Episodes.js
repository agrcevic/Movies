module.exports = (sequelize, dataTypes)=>{
    let alias = 'Episodes';
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
        rating: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        season_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    };
    let config = {
        tableName : 'episodes',
        timestamps : true
    };
// Relacion de tablas

    const Episodes = sequelize.define(alias, cols, config);
    return Episodes;
        /*Episodes.associate = function(models) {
            Episodes.belongsTo(models.Genres, {
                as: "genres",
                foreignKey : "genre_id"
            });
            Episodes.belongsToMany(models.Actors, {
                as: "actors",
                through: "actor_movie",
                foreignKey : "movie_id",
                otherKey: "actor_id",
                timestamps: true
            });
    }
    
   */ 
  
} 