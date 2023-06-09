const isDev = process.env.NODE_ENV === 'development'
uni.$u.http.setConfig((config) => {
	config.baseURL = isDev ? 'http://127.0.0.1:3000' : 'http:192.167.0.4'
	return config
})
import './requestInterceptors.js'
import './responseInterceptors.js'