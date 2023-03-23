export let Contacts;
switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(
      "mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority"
    );

    const { default: ConstactMongo } = await import("./mongo/contact.mongo.js");
    Contacts = ConstactMongo;
    break;

  case "MEMORY":
    const { default: ContactMemory } = await import(
      "./memory/contacts.memory.js"
    );
    Contacts = ContactMemory;
    break;
}
