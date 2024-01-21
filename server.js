const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your OpenAI API key
const OPENAI_API_KEY = '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';

openai.apiKey = OPENAI_API_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/chat', async (req, res) => {
  const userInput = req.body.userInput;

  try {
    const response = await openai.ChatCompletion.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that helps users with their journaling process.' },
        { role: 'user', content: userInput },
      ],
      max_tokens: 150,
    });

    res.send({ message: response.choices[0].message.text });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while processing the request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
