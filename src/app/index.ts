import { createApp } from 'vue'
import { router, store } from '@/app/providers'
import App from './App.vue'

export const application = createApp(App).use(router).use(store)
