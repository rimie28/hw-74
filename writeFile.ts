import { promises as fs } from 'fs';

const path = "./messages";

const writeFile = async(fileName:string, text:string) => {
    const filePath = `${path}/${fileName}`;
    try {
        await fs.writeFile(filePath, JSON.stringify(text));
    } catch (err) {
        console.error(err);
    }
}

export default writeFile;

