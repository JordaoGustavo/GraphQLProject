const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: String,
  saldo: 32 - BigInt64Array
});

module.exports = mongoose.model("Conta", ContaSchema);
