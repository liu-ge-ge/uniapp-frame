import {
	defineStore
} from 'pinia'

export const useStoreTheme = defineStore('theme', {
	state: () => {
		return {
			dark: {
				'--default-color': 'red'
			},
			light: {
				'--default-color': 'blue'
			},
			// 所有主题
			scheme: ['dark', 'light'],
			// 当前主题
			theme: 'dark'
		}
	},
	actions: {
		updateTheme(theme, message = '主题切换成功!') {
			console.log(theme, 'themeeeeee')
			if (this.scheme.includes(theme)) {
				this.theme = theme
				uni.$u.toast(message)
			} else {
				console.warn(new Error('不存在的主题！'))
			}

		}
	},
	getters: {
		themeValue() {
			console.log(this.theme)
			return this[this.theme]
		}
	}
})