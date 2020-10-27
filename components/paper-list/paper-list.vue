<template>
	<view>
		<view class="paper-list">
			<image :src="list.titlepic" mode="widthFix"></image>
			<view class="paper-list-txt">
					<view class="paper-list-a">
						<view >{{list.nickname}}</view>
						<view >{{list.time}}</view>
					</view>
					<view class="paper-list-b">
						<view >{{list.context}}</view>
						<template v-if="list.badget>0">
							<view ><uni-badge  :text="list.badget" type="error" /> </view>
						</template>
						
					
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
			index:Number
		}
	}
</script>

<style scoped>
.paper-list{
		padding: 25upx 5upx;
		display: flex;
		border-bottom: 1px solid #F6F6F6;
	}
	.paper-list>image{
		width: 150upx;
		height: 150upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	
	.paper-list-txt{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.paper-list-a{
		display: flex;
		justify-content: space-between;
		padding-top: 10upx;
		padding-bottom: 10upx;
		align-items: center;
	}
	.paper-list-a>view:first-child{
		font-size: 22px;
		color: #1A1A1A;
	}
	.paper-list-a>view:last-child{
		
		color: #E2E2E2;
	}
	.paper-list-b{
		display: flex;
		justify-content: space-between;
	}
	.paper-list-b>view:first-child{
		color: #CCCCCC;
	}
	
</style>
