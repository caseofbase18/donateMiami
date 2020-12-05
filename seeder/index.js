const path = require("path");
const {Seeder} = require("mongo-seeding");

const config = {
    database: {
        host: "localhost",
        port: 3003,
        name: "donateMiami"
    },
    dropDatabase: true,
};

const Seeder = new Seeder(config);
const collections = seeder.readCollectionFromPath(path.resolve("./import_data/nonProfitSeed.json"),
    {
        transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
    },
);

seeder
.import(collections)
.then(()=>{
    console.log("Success");
})
.catch(err => {
    console.log("Error", err)
});