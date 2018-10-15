module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        userName: {
            type: DataTypes.STRING
        }
    })
};
