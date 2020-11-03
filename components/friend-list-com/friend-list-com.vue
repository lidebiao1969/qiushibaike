<template>
	<view>
		<view class="friend-list-user">
				<image :src="item.userpic" mode="aspectFill"  @tap="listshow(item,index)"></image>
				<view >
					<view > {{item.username}}</view>
					<view :class="[item.sex==0?'color-blue':'color-pink']">
						<text class="iconfont " :class="[item.sex==0?'icon-nan':'icon-nv']" >
						{{item.age}}
						</text>
					</view>
				</view>
				
					<view :class="[isguanzhu?'iconfont icon-tianjiaqiushixiaozhitiao':'iconfont icon-tubiaoku--------']"  @tap="guanzi">
					</view>  
				
			</view>		
	</view>
</template>

<script>
	export default {
		
		props:{
			item:Object,
			index:Number
		},
		data(){
			return{
				isguanzhu:this.item.isguanzhu
			}
		},
		methods:{
			guanzi(){
				var title='';
				this.isguanzhu=!this.isguanzhu;
				if(this.isguanzhu){
					title="关注"
				}else{
					title="取消关注"
				}
				uni.showToast({
					title:title,
					mask:false,
					duration:1000
				})
			},
			listshow(item,e){
				console.log(e)
				console.log(JSON.stringify(item))
			},
		}
	}
</script>

<style scoped>

.friend-list-user{
	display: flex;
	padding: 10upx 0;
}
.friend-list-user>image{
	width: 120upx;
	height: 120upx;
	border-radius: 100%;
	margin-right: 20upx;
	flex-shrink: 0;
	
}
.friend-list-user>view:last-of-type{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30upx;
	height: 30upx;
	border-radius: 100%;
	font-size: 35upx;
	background-color: #0086B3;
	flex-shrink: 0;
	margin-right: 20upx;
} 
.friend-list-user>view:first-of-type{
	  flex: 1;
}
.friend-list-user>view:first-of-type>view:last-child{
	display: flex;
	justify-content: center;
	font-size: 25upx;
	width: 120upx;
	border-radius: 20upx;
}
.color-blue{
	background-color: blue;
	color: white;
}

.color-pink{
	background-color:red;
	color: white;
}
 .icon-tianjiaqiushixiaozhitiao {
	
	background-color: red!important;
}
.icon-tubiaoku--------{
	background-color: #8A6DE9 !important;
} 
</style>
