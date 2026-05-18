import Sequelize, { Model } from "sequelize";

class User extends Model {

    static init(sequelize) {

        super.init({
            nome: Sequelize.STRING
        }, {
            sequelize,
            tableName: 'pacientes',
            underscored: true
        })

        return this
    }
}

export default User