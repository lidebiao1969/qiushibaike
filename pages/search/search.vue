<template>
	<view>
		search
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarSearchInputChanged(e) {
			console.log(e)
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e)
		},
		onNavigationBarButtonTap(e) {
	//	console.log(e)
			if (e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
