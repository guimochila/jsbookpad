import path from 'path';
import { Command } from 'commander';
import { serve } from '@jsbookpad/local-api';

interface IOptions {
  port: string;
}

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Ope a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: IOptions) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction,
      );

      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port}`,
      );
    } catch (err) {
      console.log('Error', err.message);
      process.exit(1);
    }
  });
