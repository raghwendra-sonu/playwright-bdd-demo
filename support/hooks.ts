import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '../resources/.env'),
});
