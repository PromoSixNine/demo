import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    vite: {
        server: {
            hmr: {
                protocol: 'wss',
                timeout: 1,
                port: 3100,
                clientPort: 3100,
            },
        },

        logLevel: 'info',
    },
})
