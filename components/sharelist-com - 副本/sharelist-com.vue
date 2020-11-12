<template>
	<view   v-if="show" class="animated fadeIn ">
				<!-- 分享 -->
		<view class="more-share-model" @tap="toggle"></view>
		
		<view  class="more-share" >
			<view class="more-share-1">分享到</view>
			<scroll-view   class="scroll-view_H"  scroll-x="true" >
				<view  class="scroll-view-item_H" >
					<view>
						<text class="iconfont icon-weixin"></text>
					</view>
					<view >微信</view>
				</view>
				<view   class="scroll-view-item_H" >
					<view >
						<text class="iconfont icon-ziyuan"> </text>
					</view>
					<view >朋友圈</view>
				</view>
				<view   class="scroll-view-item_H"  >
					<view >
						<text class="iconfont icon-weibo1"></text>
					</view>
					<view >新浪微博</view>
				</view>
				<view    class="scroll-view-item_H" >
					<view><text  class="iconfont icon-qqhaoyou-copy"></text></view>
					<view >QQ好友</view>
				</view>
			</scroll-view>
			
			<view class="more-share-1" @tap="toggle">取消</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			toggle(){
				this.$emit('toggle');
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
	.more-share{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: 110;
	}
	
	.scroll-view_H {
		
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 25%;
		height: 120rpx;
		line-height: 120rpx;
		
		text-align: center;
	}
	
	.more-share-1{
		text-align: center;
		padding: 20upx 0;
		font-size: 32rpx;
	}
	.iconfont{
		font-size: 60rpx;
		border-radius: 100%;
		color: #00C785 ;
	}
	.icon-weixin{
		/* background:#00C785 ; */
		
	}
</style>
