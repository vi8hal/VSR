'use server';
/**
 * @fileOverview A Genkit flow for generating and refining an 'About Me' description for a portfolio.
 *
 * - generateAboutMeDescription - A function that handles the generation of the 'About Me' description.
 * - GenerateAboutMeDescriptionInput - The input type for the generateAboutMeDescription function.
 * - GenerateAboutMeDescriptionOutput - The return type for the generateAboutMeDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeDescriptionInputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('A list of keywords to include in the about me description.'),
  targetRole: z
    .string()
    .optional()
    .describe('An optional target role to tailor the description towards.'),
});
export type GenerateAboutMeDescriptionInput = z.infer<
  typeof GenerateAboutMeDescriptionInputSchema
>;

const GenerateAboutMeDescriptionOutputSchema = z.object({
  aboutMeDescription: z.string().describe('The generated "About Me" description.'),
});
export type GenerateAboutMeDescriptionOutput = z.infer<
  typeof GenerateAboutMeDescriptionOutputSchema
>;

export async function generateAboutMeDescription(
  input: GenerateAboutMeDescriptionInput
): Promise<GenerateAboutMeDescriptionOutput> {
  return generateAboutMeDescriptionFlow(input);
}

const generateAboutMePrompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeDescriptionInputSchema},
  output: {schema: GenerateAboutMeDescriptionOutputSchema},
  prompt: `You are a professional copywriter specializing in technical portfolios and resumes.
Your task is to generate a compelling and concise "About Me" description for a developer's portfolio.
The description should highlight their skills and experience, and be tailored for a professional audience.

Here are the key points to consider:
Keywords: {{#each keywords}}- {{this}}\n{{/each}}
{{#if targetRole}}Target Role: {{targetRole}}\n{{/if}}

Generate an "About Me" description that is professional, impactful, and no longer than 4 sentences.
Make sure the output strictly adheres to the JSON schema provided in the output instructions.`,
});

const generateAboutMeDescriptionFlow = ai.defineFlow(
  {
    name: 'generateAboutMeDescriptionFlow',
    inputSchema: GenerateAboutMeDescriptionInputSchema,
    outputSchema: GenerateAboutMeDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateAboutMePrompt(input);
    return output!;
  }
);
