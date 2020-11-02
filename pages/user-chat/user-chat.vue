<template>
	<view class="page">
		<!-- user-chat-list user-chat-me-->
		<view class="user-chat-list ">
			  <image src="../../static/HEAD/mm1.png" mode="widthFix" lazy-load></image> 
			<view class="user-chat-list-body">
				<!-- <image src="../../static/HEAD/man.png" mode="aspectFit"></image> -->
				 <text>随便喝</text> 
			</view>
			
		</view>
		

		
		
		<!-- 输入框 -->
	<user-chat-bottom @submit="submit"></user-chat-bottom>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:""
			}
		},
		methods: {
		submit(t){
			console.log(t)
			
			}
		}
	}
</script>

<style>
	.page{
		padding:20upx;
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
	width: 200upx;
	height: 200upx;
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



/* ----------------------- */
/* .list{
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	height: 700upx;
	background-color: #09BB07;
}
.color-blue{
	
	width: 200upx;
	height: 200upx;
	background-color: blue;
}

.color-pink{
	
	width: 200upx;
	height: 200upx;
	background-color: pink;
}
.color-red{
	
	width: 200upx;
	height: 200upx;
	background-color: red;
} */
</style>
