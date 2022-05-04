import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@unocss/nuxt',
    ],
    css: [
        '@/assets/css/main.css',
    ],
    vite: {
        server: {
            hmr: {
                protocol: 'wss',
                timeout: 10000,
                port: 3001,
            },
        },

        logLevel: 'info',
    },
    unocss: {
        preflight: true,
        icons: true,
        attributify: true,
        webFonts: {
            fonts: {
                standard: [
                    {
                        name: 'Poppins',
                        weights: [
                            '100',
                            '200',
                            '300',
                            '400',
                        ],
                        italic: false,
                    },
                ],
            },
        },
    },
})
