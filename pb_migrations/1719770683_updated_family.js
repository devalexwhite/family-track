/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rl2gpxq6sze5jmx")

  collection.name = "families"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rl2gpxq6sze5jmx")

  collection.name = "family"

  return dao.saveCollection(collection)
})
