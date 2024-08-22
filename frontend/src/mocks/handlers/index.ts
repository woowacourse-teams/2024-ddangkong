import { contentHandler } from './balanceContentHandler';
import { roomHandler } from './roomHandler';
import { voteHandler } from './voteHandler';

export const handlers = [...contentHandler, ...voteHandler, ...roomHandler];
