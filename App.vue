<script setup>
	import {
		onLaunch,
		onShow,
		onHide
	} from "@dcloudio/uni-app";

	onLaunch(() => {
		console.log('只触发发一次----onLaunch')
	})
	onShow(() => {
		console.log('从后台进入前台---onShow')
	})
	onHide(() => {
		console.log('从前台进入后台----onHide')
	})
</script>
<style lang="scss">
	@import "uni_modules/uview-plus/index.scss";
	@import "common/css/zcm-main.css";
</style>