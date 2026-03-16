import { contentHandler } from './balanceContentHandler';
import { imageHandler } from './imageHandler';
import { roomHandler } from './roomHandler';
import { voteHandler } from './voteHandler';

export const handlers = [...contentHandler, ...voteHandler, ...roomHandler, ...imageHandler];
