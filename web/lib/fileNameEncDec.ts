import crypto from 'crypto';

const key = process.env.FILENAME_CIPHER_KEY as string;
const iv = process.env.FILENAME_CIPHER_IV as string;

export const encryptFileName = (name: string) => {
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(key), iv);
  let enc = cipher.update(Buffer.from(name, 'hex'));
  enc = Buffer.concat([enc, cipher.final()]);

  return enc.toString();
};

export const decryptFileName = (name: string) => {
  const cipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key), iv);
  let dec = cipher.update(Buffer.from(name, 'hex'));
  dec = Buffer.concat([dec, cipher.final()]);

  return dec.toString();
};
