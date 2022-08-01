import { createApp } from 'vue'
// @ts-ignore -- this doesn't have typings so implicit 'any' will have to be ok.
// import * as VueGridLayout from 'vue-grid-layout';
import App from './App.vue'


export function setupGridLayout(app: any) {
    // app.use(VueGridLayout)
    // app.component('GridLayout', VueGridLayout.GridLayout)
    // app.component('GridItem', VueGridLayout.GridItem)
}


const app = createApp(App)
setupGridLayout(app)

app.mount('#app')
