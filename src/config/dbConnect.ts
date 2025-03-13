import mongoose from "mongoose";
import process from "process";
import dotenv from "dotenv";
import crypto from "crypto";
import { Buffer } from "buffer";
dotenv.config();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.DB_CONNECTION_KEY || '', 'hex');
const iv = Buffer.from(process.env.DB_CONNECTION_IV || '', 'hex');

function decrypt(encrypted:any) {
    try {
        let encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();
    } catch (error) {
        console.error('Decryption failed:', error);
        throw new Error('Decryption failed');
    }
}

async function connectDB() {
    try {
        const encryptedConnectionString = {
            iv: process.env.DB_CONNECTION_IV,
            encryptedData: process.env.DB_CONNECTION_STRING_ENCRYPTED
        };

        const connectionString = decrypt(encryptedConnectionString);

        await mongoose.connect(connectionString);
        console.log("Conectado ao banco de dados com sucesso!");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

connectDB().then(() => {
    console.log("Conexão estabelecida!");
}).catch((err) => {
    console.error("Erro na conexão:", err);
});

export default connectDB;
