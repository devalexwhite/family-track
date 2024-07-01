/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "an3jijdunb1gdnj",
    "created": "2024-06-30 17:46:38.380Z",
    "updated": "2024-06-30 17:46:38.380Z",
    "name": "children",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i6txdauh",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 200,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("an3jijdunb1gdnj");

  return dao.deleteCollection(collection);
})
