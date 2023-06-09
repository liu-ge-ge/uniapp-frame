import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import * as Pinia from 'pinia'
import {
	createUnistorage
} from '@/uni_modules/pinia-plugin-unistorage'
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uviewPlus)
	const store = Pinia.createPinia()
	// 数据持久化
	store.use(createUnistorage())
	app.use(store)
	// http请求
	import('./util/request/index.js')
	return {
		app,
		Pinia
	}
}