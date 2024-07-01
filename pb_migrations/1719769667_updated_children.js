/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("an3jijdunb1gdnj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z8p10ywp",
    "name": "birthday",
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
  const collection = dao.findCollectionByNameOrId("an3jijdunb1gdnj")

  // remove
  collection.schema.removeField("z8p10ywp")

  return dao.saveCollection(collection)
})
