<template>
	<view   v-if="show" class="animated fadeIn ">
				<!-- 分享 -->
			 <view class="more-share-model" @tap="toggle"></view> 
				<view class="uni-popup-share">
					<view class="uni-share-title">
						<text class="uni-share-title-text">分享到</text>
					</view>
					 <view class="uni-share-content">
						<scroll-view scroll-x="true" class="uni-share-content-box">
							<view class="uni-share-content-item" v-for="(item,index) in bottomData" :key="index" @tap="select(item,index)">
								<image class="uni-share-image" :src="item.icon" mode="aspectFill"></image>
								<text class="uni-share-text">{{item.text}}</text>
							</view>
						</scroll-view>
					</view>
					<view class="uni-share-button-box">
						<button class="uni-share-button" @tap="toggle">取消</button>
					</view>
				</view> 
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		data() {
			return {
				bottomData: [{
						text: '微信',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						name: 'wx'
					},
					{
						text: '支付宝',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						name: 'sina'
					},
					{
						text: '百度',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						name: 'copy'
					},
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more'
					}
				]
			}
		},
		methods:{
			toggle(){
				this.$emit('toggle');
			},
			/**
			 * 选择内容
			 */
			select(item, index) {
				this.$emit('select',item, index)
			}
		}
	}
</script>

<style scoped>
/* 分享 */
	.more-share-model{
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(248,248,248,0.5) ;
		
		z-index: 100;
	}
	.uni-popup-share {
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 110;
	}
	.uni-share-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 40px;
	}
	
	.uni-share-title-text {
		font-size: 14px;
		color: #666;
	}
	
	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
	}
	
	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: nowrap;//改了.
		white-space: nowrap;
		width: 360px;
	}
	
	.uni-share-content-item {
		width: 90px;
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding: 10px 0;
		align-items: center;
	}
	
	.uni-share-content-item:active {
		background-color: #f5f5f5;
	}
	
	.uni-share-image {
		width: 30px;
		height: 30px;
	}
	
	.uni-share-text {
		margin-top: 10px;
		font-size: 14px;
		color: #3B4144;
	}
	
	.uni-share-button-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px 15px;
	}
	
	.uni-share-button {
		flex: 1;
		border-radius: 50px;
		color: #666;
		font-size: 16px;
	}
	
	.uni-share-button::after {
		border-radius: 50px;
	}
</style>
