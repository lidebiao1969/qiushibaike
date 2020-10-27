<template>
	<view>
		<view class="topic-update" >
		<block v-for="(item,index) in items" :key="index">
			<view class="topic-update-l" animated fadeInLeft @click="goDetail(index)">
				<image :src="item.titlepic" mode="scaleToFill" lazy-load></image>
				<view class="topic-update-list">
					<view >{{item.title}}</view>
					<view >{{item.context}}...</view>
					<view >动态{{item.totalnum}}今日{{item.todaynum}}</view>
				</view>
			</view>
		</block>
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			items:Array,
			index:Number
		},
		methods:{
			goDetail(index){
				console.log(index);
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail',
					
				});
			}
		}
	}
</script>

<style scoped>

.topic-update{
	display: flex;
	flex-direction: column;
	margin-top: 20rpx;
}
.topic-update-l{
	display: flex;
	padding: 0 20rpx;
	margin-bottom: 20rpx;
}
.topic-update-l>image{
	width: 150rpx;
	height: 150rpx;
	margin-right: 20rpx;
	border-radius: 20rpx;
}
.topic-update-list{
	display: flex;
	flex-direction: column;
	padding:0 12rpx;
}
.topic-update-list>view:first-child{
	font-weight: bold;
	font-size: 32rpx;
}
.topic-update-list>view:last-child{
	 font-size: 25rpx;
	 color: #666666;
	}
</style>
