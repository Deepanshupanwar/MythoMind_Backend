import { Client } from "@gradio/client";

export const Query = async (req, res) => {
    try {
        const { input } = req.body
        const start = Date.now();
        const client = await Client.connect("MrFallGuy/MythoMindSpace", {
            hf_token: process.env.HF_TOKEN
        });
        const result = await client.predict("/predict", {
            instruction: input,
        });   
        const duration = Date.now() - start;
        console.log(`🕒 Request completed in ${duration} ms`);
        res.status(200).json({response: result.data[0]});
    }
    catch (err) {
        res.status(500).json({message: "server error"});
    }
}


