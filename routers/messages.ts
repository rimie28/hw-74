import express from "express";
import writeFile from "../writeFile";
import readFiles from "../readFile";

const messagesRouter = express.Router();

messagesRouter.post("/", async (req, res) => {
    try{
        const datetime = new Date().toISOString();
        const fileName = `${datetime}.txt`;
        const data = { ...req.body, datetime }

        await writeFile(fileName, data);
        res.send(data)
    }catch(err){
        console.error(err);
    }
})

messagesRouter.get('/', async (req, res) => {
    try {
        const messages = await readFiles(5);
        res.send(messages);
    } catch (err) {
        console.error(err);
    }
});

export default messagesRouter;
