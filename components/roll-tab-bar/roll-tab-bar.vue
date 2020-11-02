<template>
	<view>
			<view class="uni-tab-bar">
				<scroll-view  scroll-x class="uni-swiper-tab" :style="scrollStyle">
					<block v-for="(tab,index) in tabBars" :key="tab.id"  >
						<view  class="swiper-tab-list" 
						 :class="{'active':(tabIndex==index)}"
						 @tap="tabtap(index)"
						 :style="scrollItemStyle">
						 {{tab.name}}{{(tab.num)?tab.num:''}}
						 
							 <view class="uni-tab-line"></view> 
							</view>
					</block>
					
				</scroll-view>
			</view> 
	</view>
</template>

<script>
	export default {
		
		props:{
			tabBars:Array,
			tabIndex:Number,
			
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			
			tabtap(index){
				this.$emit("tabtap",index)
				
			}
		}
	}
</script>

<style scoped>
	/* @import '../../common/uni.css'; */
.swiper-tab-list{
		color: #969696;
		font-weight: bold;
	}
	

	
	
	.uni-tab-bar .active{
		color: #343434;
		
	}
	 .active .uni-tab-line{
		background-color: #0A98D5;
		height: 15upx;
		width: 90upx;
		border-radius: 20px;
		margin:auto
	} 
</style>
