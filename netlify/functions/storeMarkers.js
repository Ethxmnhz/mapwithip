const mongoose = require('mongoose');
const Marker = require('./Marker');
const cors = require('cors')({ origin: '*' });


exports.handler = cors(async (event, context) => {
  try {
    // Your existing logic for storing markers
    const markers = JSON.parse(event.body).markers;
    await Marker.deleteMany();
    await Marker.insertMany(markers);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://magical-tarsier-f58440.netlify.app',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PATCH, DELETE',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://magical-tarsier-f58440.netlify.app',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PATCH, DELETE',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
});
