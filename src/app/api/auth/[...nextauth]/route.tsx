import Nextauth from 'next-auth';
import { options } from './options';

const handler = Nextauth(options);

export { handler as GET, handler as POST };
