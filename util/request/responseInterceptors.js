uni.$u.http.interceptors.response.use(response => {
	conosle.log(response)
}, error => {
	return Promise.reject(error)
})