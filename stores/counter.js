import {
	defineStore
} from 'pinia'

export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0,
			isLogin: false
		}
	},
	actions: {
		increment() {
			this.count++
		},
		changeLoginState() {
			this.isLogin = true
		}
	},
	unistorage: {
		key: 'counter', // 缓存的键，默认为该 store 的 id，这里是 main,
		paths: ['isLogin'] // 需要缓存的路径，这里设置 foo 和 nested 下的 data 会被缓存
	}
})