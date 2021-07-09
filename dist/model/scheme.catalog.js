"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "name": "Catalog",
    "description": "カタログ資料の管理",
    "displayField": "title",
    "fields": [
        {
            "id": "id",
            "name": "id",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "title",
            "name": "title",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "goal",
            "name": "goal",
            "type": "Text",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "effect",
            "name": "effect",
            "type": "Text",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "workload",
            "name": "workload",
            "type": "Text",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "order",
            "name": "order",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "status",
            "name": "status",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "pined",
            "name": "pined",
            "type": "Boolean",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "resources",
            "name": "resources",
            "type": "Object",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "context",
            "name": "context",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "contents",
            "name": "contents",
            "type": "Object",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "stakeholders",
            "name": "stakeholders",
            "type": "Symbol",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false
        }
    ],
    "sys": {
        "space": {
            "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "n9qt9u95vzi0"
            }
        },
        "id": "catalog",
        "type": "ContentType",
        "createdAt": "2021-03-15T01:38:21.025Z",
        "updatedAt": "2021-06-23T05:24:49.304Z",
        "environment": {
            "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
            }
        },
        "publishedVersion": 8,
        "publishedAt": "2021-06-23T05:24:49.304Z",
        "firstPublishedAt": "2021-03-15T01:38:22.022Z",
        "createdBy": {
            "sys": {
                "type": "Link",
                "linkType": "User",
                "id": "5PLNT8Ib1JRYSZJBuXbEDH"
            }
        },
        "updatedBy": {
            "sys": {
                "type": "Link",
                "linkType": "User",
                "id": "5PLNT8Ib1JRYSZJBuXbEDH"
            }
        },
        "publishedCounter": 4,
        "version": 9,
        "publishedBy": {
            "sys": {
                "type": "Link",
                "linkType": "User",
                "id": "5PLNT8Ib1JRYSZJBuXbEDH"
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lLmNhdGFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWwvc2NoZW1lLmNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNYLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLGFBQWEsRUFBRSxXQUFXO0lBQzFCLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLFFBQVEsRUFBRTtRQUNWO1lBQ0ksSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxPQUFPO1lBQ2YsTUFBTSxFQUFFLFFBQVE7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIs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