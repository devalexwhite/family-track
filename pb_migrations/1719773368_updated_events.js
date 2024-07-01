/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3uiklgy8rgwkt4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecneh0eb",
    "name": "time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3uiklgy8rgwkt4")

  // remove
  collection.schema.removeField("ecneh0eb")

  return dao.saveCollection(collection)
})
