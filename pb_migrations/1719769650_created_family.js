/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rl2gpxq6sze5jmx",
    "created": "2024-06-30 17:47:30.695Z",
    "updated": "2024-06-30 17:47:30.695Z",
    "name": "family",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fylnp4pp",
        "name": "adults",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "hvbsfqzb",
        "name": "children",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "an3jijdunb1gdnj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rl2gpxq6sze5jmx");

  return dao.deleteCollection(collection);
})
