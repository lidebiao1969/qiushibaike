<template>
	<view>
		<view style="text-align: center;margin: 20upx 0;"> 未登录</view>
		<view class="other-login">
			<view >
				<image  src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="widthFix"></image>
			</view>
			<view >
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-3.png" mode="widthFix"></image>
			</view>
			<view >
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="widthFix"></image>
			</view>
		</view>
		<view style="text-align: center; margin: 20upx 0;">
			账号密码登录 {{""}}
			<text class="qfont icon-arrow-ios-forward"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.other-login{
	display: flex;
	margin: 10upx 180upx;
	justify-content: space-around;
}
.other-login>view{
	width: 80upx;height: 80upx;
	border-radius: 100%;
	background:#5158EF;
	display: flex;
	justify-content: center;
	align-items: center;
}
.other-login>view>image{
	width: 40upx;height: 40upx;
	
}

.other-login>view:nth-child(2){
	background: #73F37C;
}
.other-login>view:nth-child(3){
	background: #F2F373;
}
</style>
