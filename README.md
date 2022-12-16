# event-application
This is a public holiday event application that demonstrates how to make a GET request to the public-holiday API to retrieve information about public holidays in the United States for the year 2019.
The request is made using the fetch() function, which is a modern way to make HTTP requests in JavaScript. The fetch() function takes two arguments: the URL of the API endpoint and an options object.

here is the link to the API --(https://rapidapi.com/theapiguy/api/public-holiday)

the Returns the public holidays from a given year and country. 
i

<div>
the data looks like this
[
{
“date”:“2017-01-01”,
“localName”:“Neujahr”,
“name”:“New Year’s Day”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:1967,
“type”:“Public”
},
{
“date”:“2017-01-06”,
“localName”:“Heilige Drei Könige”,
“name”:“Epiphany”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-04-17”,
“localName”:“Ostermontag”,
“name”:“Easter Monday”,
“countryCode”:“AT”,
“fixed”:false,
“global”:true,
“counties”:null,
“launchYear”:1642,
“type”:“Public”
},
{
“date”:“2017-05-01”,
“localName”:“Staatsfeiertag”,
“name”:“National Holiday”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:1955,
“type”:“Public”
},
{
“date”:“2017-05-25”,
“localName”:“Christi Himmelfahrt”,
“name”:“Ascension Day”,
“countryCode”:“AT”,
“fixed”:false,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-06-05”,
“localName”:“Pfingstmontag”,
“name”:“Whit Monday”,
“countryCode”:“AT”,
“fixed”:false,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-06-15”,
“localName”:“Fronleichnam”,
“name”:“Corpus Christi”,
“countryCode”:“AT”,
“fixed”:false,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-08-15”,
“localName”:“Maria Himmelfahrt”,
“name”:“Assumption Day”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-10-26”,
“localName”:“Staatsfeiertag”,
“name”:“National Holiday”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-11-01”,
“localName”:“Allerheiligen”,
“name”:“All Saints’ Day”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-12-08”,
“localName”:“Mariä Empfängnis”,
“name”:“Immaculate Conception”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-12-25”,
“localName”:“Weihnachten”,
“name”:“Christmas Day”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
},
{
“date”:“2017-12-26”,
“localName”:“Stefanitag”,
“name”:“St. Stephen’s Day”,
“countryCode”:“AT”,
“fixed”:true,
“global”:true,
“counties”:null,
“launchYear”:null,
“type”:“Public”
}
]