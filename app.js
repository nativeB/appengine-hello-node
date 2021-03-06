/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
require('@google-cloud/trace-agent').start();
require('@google-cloud/debug-agent').start({ allowExpressions: true });

// [START gae_flex_quickstart]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.get('/status/:code', (req, res) => {
  const code = parseInt(req.params.code) || 500;
  res
    .status(code)
    .send(`Status Code: ${code}`)
    .end();
});

app.get('/error', (req, res) => {
  const error = new Error('Internal occured');
  console.log(error)
  res
    .status(500)
    .send('500: Internal Error')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_flex_quickstart]

