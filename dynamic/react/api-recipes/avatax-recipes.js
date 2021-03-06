export default [
    {
        id: 0,
        action: 'post',
        path: 'https://development.avalara.net/1.0/tax/get',
        proxy: {
            route: 'https://swn36zl7ba.execute-api.us-west-2.amazonaws.com/prod/tax/get',
            key: {
                name: 'api-key',
                value: 'b24757b69083fa34d27a7d814ea3a59c'
            }
        },
        operationId: 'getTax',
        recipeName: 'Calculate Sales Tax Owed On Customer Transaction',
        recipeDescription: "You're a small business selling t-shirts in Chicago. How many are you selling, and for how much?",
        request: {
            postBody: {
                CustomerCode: 'ABC4335',
                Addresses: [
                    {
                        AddressCode: '01',
                        Line1: '45 Fremont Street',
                        City: 'Chicago',
                        Region: 'IL',
                        Country: 'US',
                        PostalCode: '60602'
                    }
                ],
                Lines: [
                    {
                        LineNo: '1',
                        DestinationCode: '01',
                        OriginCode: '02',
                        Qty: '',
                        Amount: ''
                    }
                ]
            },
            queryString: null,
            pathParams: null
        },
        inputs: [
            {
                name: '# of T-shirts',
                description: 'How many Tshirts you sold',
                in: 'postBody',
                field: 'Lines:[0]:Qty',
                value: ''
            },
            {
                name: 'T-shirt price ($)',
                description: 'How much each Tshirt costs',
                in: 'postBody',
                field: 'Lines:[0]:Amount',
                value: ''
            }
        ]
    },
    {
        id: 1,
        action: 'get',
        path: 'https://development.avalara.net/1.0/tax/{latitude},{longitude}/get',
        proxy: {
            route: 'https://swn36zl7ba.execute-api.us-west-2.amazonaws.com/prod/tax/{latitude},{longitude}/get',
            key: {
                name: 'api-key',
                value: 'b24757b69083fa34d27a7d814ea3a59c'
            }
        },
        operationId: 'estimateTax',
        recipeName: 'Estimating Tax',
        recipeDescription: "You're selling stuff in Seattle, WA. Enter a dollar amount to see how much tax you'll pay.",
        request: {
            postBody: null,
            queryString: {
                saleamount: ''
            },
            pathParams: {
                latitude: '47.6205',
                longitude: '-122.3493'
            }
        },
        inputs: [
            {
                name: 'Sale Amount ($)',
                description: 'How much money to estimate taxes for!',
                in: 'queryString',
                field: 'saleamount',
                value: ''
            }
        ]
    }
];
