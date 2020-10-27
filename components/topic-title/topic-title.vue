<template>
	<view>
		<view class="topic-bg">
			<image :src="item.titlepic" mode="aspectFill"></image>
		</view>
		<view class="topic-info">
			<view class="topic-info-1">
				<image :src="item.titlepic" mode="aspectFill" lazy-load></image>
				<view >#{{item.title}}#</view>
			</view>
			<view class="topic-info-2">
				<view >动态：{{item.tatalnum}}</view>
				<view >今日： {{item.todaynum}}</view>
			</view>
			<view class="topic-info-3">
				{{item.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		}
	}
</script>

<style scoped>
.topic-bg{
	width: 100%;
	height: 300upx;
	position: relative;
	overflow: hidden;
}
.topic-bg>image{
	width: 100%;
	position: absolute;
	filter: blur(2px);
}



.topic-info{
	display: flex;
	flex-direction: column;
}
.topic-info-1{
	display: flex;
	position: relative;
}
.topic-info-1>image{
	
	width: 150upx;
	height: 150upx;
	position: absolute;
	top:-75upx;
	margin-left: 10upx;
	border-radius: 20upx;
}
.topic-info-1>view{
	flex: 1;
	font-size: 35upx;
	font-weight: bold;
	margin-left: 170upx;
}

.topic-info-2{
	display: flex;
	padding-top: 30upx;
	padding-left: 20upx;
}
.topic-info-2>view:first-child{
	color: #CDCDCD;
	font-size: 32upx;
}
.topic-info-2>view:last-child{
	color: #CDCDCD;
	margin-left: 20upx;
	font-size: 32upx;
}
.topic-info-3{
	font-size: 32upx;
	padding-left: 20upx;
	padding-top: 10upx;
	color: #A3A3A3;
	padding-bottom: 20upx;
}
</style>
