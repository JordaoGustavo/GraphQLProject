const Conta = require("../Models/Contas");
module.exports = {
  Query: {
    contas: () => Conta.find(),
    conta: (_, { id }) => Conta.findById(id)
  },
  Mutation: {
    createConta: (_, { nome, email, saldo }) =>
      Conta.create({ nome, email, saldo })
  }
};
