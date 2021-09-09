
# Returned Data from API's 

What we will store into the DB is

{
  "destination_addresses": ["San Francisco, CA, USA", "Victoria, BC, Canada"],
  "origin_addresses": ["Vancouver, BC, Canada", "Seattle, WA, USA"],
  "rows":
    [
      {
        "elements":
          [
            {
              "distance": { "text": "1,723 km", "value": 1723247 },
              "duration": { "text": "3 days 21 hours", "value": 335356 },
              "status": "OK",
            },
            {
              "distance": { "text": "139 km", "value": 138696 },
              "duration": { "text": "6 hours 47 mins", "value": 24405 },
              "status": "OK",
            },
          ],
      },
    ],
  "fuelStations":{
  "fuelStation":[
    {
    "brand":"TOTAL",
    "brandIcon":"http://origin.stg.cld.vcdn.data.here.com/p/d/autox_stg/dt/icons/2015-05-06/total.png",
    "fuelPrice":[
        {
        "price":1.389,
        "deltaPrice":0.26,
        "indexScore":98,
        "fuelType":"1",
        "unit":"l",
        "currency":"EUR",
        "lastUpdateTimestamp":"2015-03-12T10:17:45.000Z"
        }
    ],
    "position":{
        "latitude":52.53087,
        "longitude":13.44176
      },
    }
  ]
  }
}




## Maps API

{
  "destination_addresses": ["San Francisco, CA, USA", "Victoria, BC, Canada"],
  "origin_addresses": ["Vancouver, BC, Canada", "Seattle, WA, USA"],
  "rows":
    [
      {
        "elements":
          [
            {
              "distance": { "text": "1,723 km", "value": 1723247 },
              "duration": { "text": "3 days 21 hours", "value": 335356 },
              "status": "OK",
            },
            {
              "distance": { "text": "139 km", "value": 138696 },
              "duration": { "text": "6 hours 47 mins", "value": 24405 },
              "status": "OK",
            },
          ],
      },
      {
        "elements":
          [
            {
              "distance": { "text": "1,468 km", "value": 1468210 },
              "duration": { "text": "3 days 7 hours", "value": 284548 },
              "status": "OK",
            },
            {
              "distance": { "text": "146 km", "value": 146500 },
              "duration": { "text": "2 hours 53 mins", "value": 10376 },
              "status": "OK",
            },
          ],
      },
    ],
  "status": "OK",
}

## Gas API

{
   "hasMore":true,
   "fuelStations":{
    "fuelStation":[
     {
      "brand":"TOTAL",
      "brandIcon":"http://origin.stg.cld.vcdn.data.here.com/p/d/autox_stg/dt/icons/2015-05-06/total.png",
      "fuelPrice":[
         {
          "price":1.389,
          "deltaPrice":0.26,
          "indexScore":98,
          "fuelType":"1",
          "unit":"l",
          "currency":"EUR",
          "lastUpdateTimestamp":"2015-03-12T10:17:45.000Z"
         }
      ],
      "open24x7":true,
      "stationDetails":{
         "openingHours":{
          "regularOpeningHours":[
           {
            "daymask":127,
            "period":[
               {
                "from":"00:00:00",
                "to":"24:00:00"
               }
            ]
           }
          ]
         }
      },
      "address":{
         "city":"Berlin",
         "country":"DEU",
         "region":"Berlin",
         "street":"Margarete-Sommer-Stra�e",
         "streetNumber":"2",
         "postalCode":"10407"
      },
      "contacts":{
         "phone":[
          {
           "value":"+493042852514",
           "label":"PHONE"
          }
         ]
      },
      "distance":0,
      "position":{
         "latitude":52.53087,
         "longitude":13.44176
      },
      "name":"TOTAL",
      "id":"276u33dc-d1d2783a63404a6789f281438f32375f",
      "pvId":"50664433",
      "lastUpdateTimestamp":"2014-12-14T11:01:41.609Z",
      "timeZone":"Europe/Berlin"
     }
    ]
   }
}


For our data base

We want the LocationIQ to create a lat and lon for the origin in google maps

We will also use LocationIQ to get a lat and lon from your city, in which we will enter in the Gas API which will return the nearest gas station and return the price of gas

