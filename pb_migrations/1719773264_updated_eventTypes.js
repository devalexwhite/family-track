/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slekd8u72zovf19")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ktyuc5s",
    "name": "hasQuantity",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slekd8u72zovf19")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ktyuc5s",
    "name": "has_quantity",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
