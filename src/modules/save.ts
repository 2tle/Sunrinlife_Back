import { writeFileSync } from 'fs';
import path from 'path';
import { Attachment } from '../models/attachment';
import { SHA256 } from './hash';

export function SaveFile(filename: string, data: string, mimetype: string) {
    const UPLOAD_PATH = process.env.UPLOAD_PATH;
    if (UPLOAD_PATH == undefined) throw Error('UPLOAD_PATH is empty');
    writeFileSync(path.resolve(UPLOAD_PATH, SHA256(data)), data);
    return new Attachment(filename, UPLOAD_PATH, mimetype);
}