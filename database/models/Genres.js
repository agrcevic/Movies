module.exports = (sequelize, dataTypes)=>{
    let alias = 'Genres';
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

    const Genres = sequelize.define(alias, cols, config);
    return Genres;
        Genres.associate = function(models) {
            Genres.belongsTo(models.Movies, {
                as: "movies",
                foreignKey : "genre_id"
            });
           
    }
 
    
}