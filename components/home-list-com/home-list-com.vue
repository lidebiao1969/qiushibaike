<template>
	<view>
		<view   class="u-f-btn  u-margin-v-20upx"
		 :style="[{ color: activeColor, fontSize: fontSize + 'px' }]"
		 @tap="clickevent">
			<view class="u-f-ac">
			<view v-if="item.icon" class="qfont" :class="['icon-'+ item.icon]"></view>
			<view class="setting-name">{{item.name}} </view>
			</view>
			<view class="qfont icon-arrow-ios-forward"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number,
			activeColor:String,
			fontSize:Number
		},
		methods:{
			clickevent(){
				switch(this.item.type){
					case 'navigateTo':
					uni.navigateTo({url: this.item.url});
					break;
					case 'switchTab':
					uni.switchTab({url:this.item.url})
					break;
					
				}
			}
		}
	}
</script>

<style scoped>
.u-margin-v-20upx>view>.qfont{
	color: #09BB07;
	margin-right: 10upx;
}
.setting-name:hover{
	transform: scale(1.2);
	
}
.u-margin-v-20upx{
	border-bottom: 1px solid #6D6D72;
}
</style>
