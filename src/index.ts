import * as dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
// Create an OpenAI instance with the API key
const configuration = new Configuration({
    organization: process.env.openai_organization,
    apiKey: process.env.openai_key,
});
const openai = new OpenAIApi(configuration);
import { improve } from './api/improve';




(async () => {
    try {
        const params: string[] = process.argv.slice(2);
        if (params.length > 0) {
            switch (params[0]) {
                case 'improve':
                    improve(openai);
                    break;
                default:
                    console.log('show params');
                    break;
            }
        } else {
            console.log('show params');
        }
    } catch (err) {
        console.log(err);
    }
})();
