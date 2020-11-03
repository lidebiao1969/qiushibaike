<template>
	<view>
		<view class="paper-right-popup-mask" v-show="show" @tap="hidepopup">
		
			<view class="paper-right-popup" v-show="show">
		
				<view class="u-f-ac" hover-class="paper-right-popup-h" @tap='addfriend'>
		
					<view class="iconfont icon-soushuo-copy" ></view>
					 添加糗友
		
				</view>
				 <view class="u-f-ac" hover-class="paper-right-popup-h" @tap="clear">
					<view class="iconfont icon-qingchu1"> </view>
					 清除糗友
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
		methods:{
			addfriend(){
			//	console.log("加好友")
				this.$emit("addfriend")
			},
			
			clear(){
				//console.log("clearfriend")
				this.$emit("clear")
			},
			
			hidepopup(){
				this.$emit("hidepopup")
			},
		}
	}
</script>

<style scoped>

	.u-f-ac{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.paper-right-popup-mask{
			position: fixed;
			right: 0;
			top: 0;
			left: 0;
			bottom: 0;
			z-index: 99;
			
		}
		.paper-right-popup{
			padding: 20upx 20upx;
			position: fixed;
			right: 0;
			top:80upx;
			z-index: 100;
			width: 250upx;
			background-color: #FFFFFF;
			box-shadow: 1upx 1upx 20upx 2upx #cccccc;
		}
		
		.paper-right-popup-h{
			background-color: red;
		}
		.paper-right-popup>view>view{
			margin-right: 15upx;
			font-weight: bold;
		}
		.paper-right-popup>view{
			font-size: 35upx;
		}
</style>
