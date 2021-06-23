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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lLmNhdGFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbC9zY2hlbWUuY2F0YWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlO0lBQ1gsTUFBTSxFQUFFLFNBQVM7SUFDakIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsY0FBYyxFQUFFLE9BQU87SUFDdkIsUUFBUSxFQUFFO1FBQ1Y7WUFDSSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLFFBQVE7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLE9BQU87WUFDZixNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsT0FBTztZQUNmLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxPQUFPO1lBQ2YsTUFBTSxFQUFFLFNBQVM7WUFDakIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRDtZQUNJLElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxXQUFXO1lBQ25CLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7S0FDSjtJQUNHLEtBQUssRUFBRTtRQUNQLE9BQU8sRUFBRTtZQUNMLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsTUFBTTtnQkFDVixVQUFVLEVBQUUsT0FBTztnQkFDbkIsSUFBSSxFQUFFLGNBQWM7YUFDM0I7U0FDSjtRQUNELElBQUksRUFBRSxTQUFTO1FBQ1gsTUFBTSxFQUFFLGFBQWE7UUFDckIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLGFBQWEsRUFBRTtZQUNmLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsUUFBUTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxVQUFVLEVBQUUsYUFBYTthQUNoQztTQUNKO1FBQ0Qsa0JBQWtCLEVBQUUsQ0FBQztRQUNqQixhQUFhLEVBQUUsMEJBQTBCO1FBQ3pDLGtCQUFrQixFQUFFLDBCQUEwQjtRQUM5QyxXQUFXLEVBQUU7WUFDYixLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLE1BQU07Z0JBQ1YsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLElBQUksRUFBRSx3QkFBd0I7YUFDckM7U0FDSjtRQUNELFdBQVcsRUFBRTtZQUNULEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsTUFBTTtnQkFDVixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsSUFBSSxFQUFFLHdCQUF3QjthQUNyQztTQUNKO1FBQ0Qsa0JBQWtCLEVBQUUsQ0FBQztRQUNqQixTQUFTLEVBQUUsQ0FBQztRQUNaLGFBQWEsRUFBRTtZQUNmLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsTUFBTTtnQkFDVixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsSUFBSSxFQUFFLHdCQUF3QjthQUNyQztTQUNKO0tBQ0o7Q0FDQSxDQUFBIn0=