import { promises as fs } from 'fs';

const path = './messages';

const readFiles = async (number: number) => {
    try {
        const files = await fs.readdir(path);
        const lastMessages = files.sort().slice(-number)

        const messages = [];
        for (const message of lastMessages) {
            const filePath = `${path}/${message}`;
            const content = (await fs.readFile(filePath)).toString();
            messages.push({
                message: JSON.parse(content),
            });
        }
        return messages;
    } catch(err) {
        console.error(err)
    }
}

export default readFiles;