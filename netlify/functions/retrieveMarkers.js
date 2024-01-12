const mongoose = require('mongoose');
const Marker = require('./Marker');
const cors = require('cors')({ origin: '*' });


exports.handler = cors(async (event, context) => {
  try {
    const markers = await Marker.find();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://magical-tarsier-f58440.netlify.app',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ success:true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://ethxmnhz.github.io',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
});
