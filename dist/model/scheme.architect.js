"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
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
        "id": "stakeholder",
        "name": "stakeholder",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [
            {
                "in": [
                    "チーム",
                    "システム"
                ]
            }
        ],
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
        "id": "relations",
        "name": "relations",
        "type": "Object",
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
        "id": "templateType",
        "name": "templateType",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    },
    {
        "id": "body",
        "name": "body",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    },
    {
        "id": "category",
        "name": "category",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [
            {
                "in": [
                    "Portal"
                ]
            }
        ],
        "disabled": false,
        "omitted": false
    },
    {
        "id": "overview",
        "name": "overview",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false,
        "linkType": "Asset"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lLmFyY2hpdGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVsL3NjaGVtZS5hcmNoaXRlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNYO1FBQ0ksSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRDtRQUNJLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFO1lBQ1g7Z0JBQ0ksSUFBSSxFQUFFO29CQUNGLEtBQUs7b0JBQ0wsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRDtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsRUFBRTtRQUNqQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsRUFBRTtRQUNqQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsRUFBRTtRQUNqQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLGNBQWM7UUFDdEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsUUFBUTtRQUNoQixXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUU7WUFDWDtnQkFDSSxJQUFJLEVBQUU7b0JBQ0YsUUFBUTtpQkFDWDthQUNKO1NBQ0o7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsRUFBRTtRQUNqQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsT0FBTztLQUN0QjtDQUNKLENBQUEifQ==