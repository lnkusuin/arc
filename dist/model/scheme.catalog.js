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
        "updatedAt": "2021-06-23T03:01:18.014Z",
        "environment": {
            "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
            }
        },
        "publishedVersion": 6,
        "publishedAt": "2021-06-23T03:01:18.014Z",
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
        "publishedCounter": 3,
        "version": 7,
        "publishedBy": {
            "sys": {
                "type": "Link",
                "linkType": "User",
                "id": "5PLNT8Ib1JRYSZJBuXbEDH"
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lLmNhdGFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbC9zY2hlbWUuY2F0YWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlO0lBQ1gsTUFBTSxFQUFFLFNBQVM7SUFDakIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsY0FBYyxFQUFFLE9BQU87SUFDdkIsUUFBUSxFQUFFO1FBQ1Y7WUFDSSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLFFBQVE7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLE9BQU87WUFDZixNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFT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