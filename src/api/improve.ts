import fs from 'fs';
import path from 'path';
import { OpenAIApi } from "openai";
import { MODELS } from '../constants';


export const improve = async (openai: OpenAIApi) => {
    const file = fs.readFileSync(path.join(__dirname, `/../data/code.ts`), 'utf8');
    // console.log('file:', file);

    const response = await openai.createCompletion({
        model: MODELS.TEXT_DAVINCI_003,
        prompt: file,
        max_tokens: 500,
        temperature: 0,
      });

    console.log('response:', response.data);

    // const response = await openai.listEngines();
    // const data = response.data.data;
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].id.includes('code'))
    //         console.log(data[i].id);
    // }
}