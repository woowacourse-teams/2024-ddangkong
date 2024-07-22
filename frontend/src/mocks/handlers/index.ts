import { contentHandler } from './balanceContentHandler';
import { voteHandler } from './voteHandler';

export const handlers = [...contentHandler, ...voteHandler];
