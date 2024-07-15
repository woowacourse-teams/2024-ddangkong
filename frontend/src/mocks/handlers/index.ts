import { questionHandler } from './questionHandler';
import { voteHandler } from './voteHandler';

export const handlers = [...questionHandler, ...voteHandler];
