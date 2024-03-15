import {
  defineConfig
} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/style.sass";`, // Certifique-se de ajustar o caminho conforme a sua estrutura de pastas
      },
    },
  },
});