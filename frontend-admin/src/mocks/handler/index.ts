import { contentHandlers } from './content';
import { loginHandlers } from './login';

export const handlers = [...contentHandlers, ...loginHandlers];
