var request = require("request");

var options = { method: 'POST',
  url: 'http://api-masood.herokuapp.com',
  headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJFRTRNRVZFTmtVMU5FUkNNVU0xTlRrNFFVWTFPRGMzTTBJNU16Y3hNakU1TnpNek1rUXdPQSJ9.eyJpc3MiOiJodHRwczovL21hc29vZGdvb2wuYXV0aDAuY29tLyIsInN1YiI6IjN4VXc5YWgzSWllTnVNVEJySmZiM0Z0R1l5ZTljQjJoQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS1tYXNvb2QuaGVyb2t1YXBwLmNvbS8iLCJpYXQiOjE1Mzg0Mjk2NDYsImV4cCI6MTUzODUxNjA0NiwiYXpwIjoiM3hVdzlhaDNJaWVOdU1UQnJKZmIzRnRHWXllOWNCMmgiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.d7LJ6pqJUgjznu5JTeXspnq4aAp15Ktn_QxMEaRBKphejayBreWOHBJWDv792v6zvcpMNd8wVdGfe_amXIDehvdtP8ggSMsYpF1-pen358VDKx0m4ts78RTZbky9jVMXS-Yer1mO_uLPqo50RHldm7RWkj5lmY9fwTnfTkxbPRTbzDjzQ8pOYT1mpfyeQstsNs9hkfGsS8ivmD7cmAj2amXHPx4x3TVtAyYb9q7GeaZAkjrdvYOAXvlgfLSRop-yHIFSkUfDHYpK9r851vf-NwyJ728b2YN3tnw-tDCAyPTDyIeEPqIvXlgCuTDXKibX7vMPngA_83yJNzHliYFavA' } ,
  json: {title:"MANCHESTER", content:"UNITED"}

};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response.body);
});