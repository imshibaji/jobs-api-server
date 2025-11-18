
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'node:crypto';
import { promisify } from 'node:util';
import * as bcrypt from 'bcrypt';

export const encryptText = async (password: string, textToEncrypt: string = 'Nest') => {
    const iv = randomBytes(16);
    // The key length is dependent on the algorithm.
    // In this case for aes256, it is 32 bytes.
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    const encryptedText = Buffer.concat([
        cipher.update(textToEncrypt),
        cipher.final(),
    ]);
    return { encryptedText, key, iv };
};

export const decryptText = async (encryptedText: Buffer<ArrayBuffer>, key: string, iv: string) => {
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
        decipher.update(encryptedText),
        decipher.final(),
    ]);
    return decryptedText.toString();
}

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const varifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
}


