module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
        userName: {
            type: Sequelize.STRING
        }
    })
}
