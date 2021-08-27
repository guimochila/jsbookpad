import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

interface BundlerReturn {
  code: string;
  error: string;
}

class Bundler {
  static instance: Bundler;

  static async getInstance(): Promise<Bundler> {
    try {
      if (!Bundler.instance) {
        Bundler.instance = new Bundler();
        await Bundler.instance.initialize();
      }
    } catch (e) {
      console.log(e);
    }

    return Bundler.instance;
  }

  async initialize() {
    await esbuild.initialize({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.12.22/esbuild.wasm',
    });
  }

  async build(rawCode: string): Promise<BundlerReturn> {
    try {
      const result = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
        define: {
          'process.env.NODE_ENV': '"production"',
          global: 'window',
        },
        jsxFactory: '_React.createElement',
        jsxFragment: '_React.Fragment',
      });

      return {
        code: result.outputFiles[0].text,
        error: '',
      };
    } catch (error) {
      return {
        code: '',
        error: error.message,
      };
    }
  }
}

const instance = Bundler.getInstance();

export default instance;
