import {defineConfig} from "vite";
import {exec} from "child_process";

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    {
      name: 'prebuild-command',
      buildStart: (thing) => {
        console.log('restarted, running tailwind build...');
        exec(`pnpm run tailwind`);
      }
    },
  ]
})