uni.$u.http.interceptors.request.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})