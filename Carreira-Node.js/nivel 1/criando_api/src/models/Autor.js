import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  dataNascimento: { type: Date }
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema);

export { autor , autorSchema };