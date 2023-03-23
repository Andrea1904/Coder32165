import mongoose from "mongoose";

export default class mongoSingleton {
  static #instance;

  constructor() {
    mongoose.connect(
      "mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Conexion ya existe");
      return this.#instance;
    }
    this.#instance = new mongoSingleton();
    console.log("Conectado");
    return this.#instance;
  }
}
