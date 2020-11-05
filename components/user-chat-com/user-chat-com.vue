<template>
	<view>
		<view :id="item.id" class="user-chat-list-time">{{item.time}} </view>
		<view class="user-chat-list" :class="{'user-chat-me':item.isme}">
			  <image :src="item.userpic" mode="widthFix" lazy-load></image> 
			<view class="user-chat-list-body">
				 <image  v-if="item.type=='img'" :src="item.imgsrc" mode="aspectFit"></image> 
				 <text v-if="item.type=='text'">{{item.content}}</text> 
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
		
	}
</script>

<style scoped>
	
.user-chat-list-time{
		padding-top: 30upx ;
		font-size: 25upx;
		color: #333333;
		text-align: center;
	}
.user-chat-list{
	display: flex;
	margin: 20upx 0;
	
	
}

.user-chat-list>image{
	width: 100upx;
	height: 100upx;
	flex-shrink: 0;
	margin-right: 30upx;
	border-radius: 100%;
	
}
.user-chat-list-body{
	background: #F4F4F4;
	padding: 25upx;
	flex: 1;
	height: 100upx;	
	border-radius: 20upx;
	position: relative;
	margin-right: 120upx;
	display: flex;
	justify-content:flex-start;
}

.user-chat-list-body>image{
	width: 100upx;
	height: 100upx;
}


.user-chat-list-body:after{
	position: absolute;
	left: -30upx;
	right: 0;
	top:30upx;
	content: '';
	width: 0;
	height: 0;
	border: 16upx solid #F4F4F4;
	border-color: transparent #F4F4F4 transparent transparent;
}
.user-chat-me{
	display: flex;
	flex-direction: row-reverse;
}
.user-chat-me>image{
	/* width: 100upx; */
	height: 100upx;
	flex-shrink: 0;
	margin-right: 30upx;
	border-radius: 100%;
	
}
.user-chat-me .user-chat-list-body{
	margin-right: 20upx;
	margin-left: 120upx;
	justify-content:flex-end;
}
.user-chat-me .user-chat-list-body:after{
	left: auto;
	right: -30upx;
	border-color: transparent transparent transparent #F4F4F4;
	
}

</style>
