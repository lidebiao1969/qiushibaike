<template>
	<view>
		<view class="hot-classify">
			<view class="hot-classify-1">
				<view class="hot-classify-1-1" >热门分类</view>
				<view class="hot-classify-1-2" @tap="openHot">更多
				<view class="icon iconfont icon-arrow-right"></view>
				</view>
			</view>
			<view class="hot-classify-2">
				<block v-for="(item2,index) in nav" :key="index">
					<view >{{item2.name}}</view>
					
				</block>
				
				
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			nav:Array
		},
		methods:{
			openHot(){
				uni.navigateTo({
					url:"../../pages/topic-nav/topic-nav"
				});
			}
			
		}
	}
</script>

<style>
	.hot-classify{
		display: flex;
		flex-direction: column;
		padding: 10rpx;
		border-bottom: 1px solid #848484;
		border-top: 1px solid  #848484;
	}
	.hot-classify-1{
		display: flex;
		justify-content: space-between;
	}
	.hot-classify-2{
		display: flex;
		
		justify-content: center;
		margin-top: 10rpx;
		padding: 0 30rpx;
	}
	.hot-classify-2 >view{
		font-size: 22rpx;
		color: #1AAD19;
		background:#ECE0F8;
		margin-left: 30rpx;
		border-radius: 10rpx;
		
	}
	
	.hot-classify-1-1{
		font-size: 35rpx;
		font-weight: bold;
	}
	.hot-classify-1-2{
		font-size: 18rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}

</style>
