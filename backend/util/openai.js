require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI();

const generatePrescription = async (prompt) => {
    try {
        console.log('Generando prescripción:', prompt);
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'system', content: 'You are a doctor.' }, { role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
            max_tokens: 100,
            temperature: 0.7,
            stop: ['\n'],
        });

        const prescription = completion.data.choices[0].message.content;
        console.log('Prescripción generada:', prescription);
        return prescription;
        
    } catch (error) {
        console.error('Error al generar la prescripción:', error);
        throw error;
    }
};

module.exports = { generatePrescription };
