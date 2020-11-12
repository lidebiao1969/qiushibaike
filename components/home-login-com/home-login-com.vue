<template>
	<view>
		<view class="home-info u-f-btn  u-margin-h-20upx  u-margin-v-20upx">
			<view class="u-f ">
				<image class="head-Size-50 u-margin-h-10upx" :src="homeInfo.userpic" mode="aspectFill" lazy-load></image>
				<view class="home-user-info u-f-col-l ">
					<view >{{homeInfo.username}}</view>
					<view >总访客: {{homeInfo.totalnum}}  今日：{{homeInfo.todaynum}}</view>
				</view>
			</view>
			<view class="qfont icon-arrow-ios-forward"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			homeInfo:Object
		}
	}
</script>

<style scoped>
.home-user-info>view:first-child{
	font-weight: bold;
}

.home-user-info>view:last-child{
	color: #BBBBBB
}
.home-info{
	padding: 0 20upx;
}
</style>
