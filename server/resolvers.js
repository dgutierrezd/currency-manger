module.exports = {
    Query: {
        allGastos: (_, args, { models }) => models.Gasto.findAll({
            order: [
                ['id', 'DESC']
            ]
        }),
        getGasto: (_, { id }, { models }) => 
        models.Gasto.findOne({
            where: {
                id,
            },
        }),
    },

    Mutation: {
        createGasto: (_, args, { models }) => models.Gasto.create(args),
        updateGasto: (_, { id, name, valor, date, type }, { models }) => 
            models.Gasto.update({ name: name, valor: valor, date: date, type: type }, { where: { id } }),
        deleteGasto: (_, args, { models }) => 
            models.Gasto.destroy({ where: args })
    }
}