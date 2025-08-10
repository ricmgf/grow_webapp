import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req:NextApiRequest,res:NextApiResponse){if(req.method!=='POST')return res.status(405).json({error:'Use POST'});if(!process.env.OPENAI_API_KEY)return res.status(500).json({error:'OpenAI key missing'});res.status(200).json({ok:true});}
