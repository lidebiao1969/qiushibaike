<template>
	<view>
		<view class="user-chat-bottom">
			<input type="text" placeholder="文明发言" v-model="text"/>
			<view class="iconfont icon-zhifeiji" @tap="submit"> </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:""
			};
		},
		methods:{
			submit(){
			//	console.log(this.text)
				this.$emit("submit",this.text)
				this.text=""
			}
		}
	}
</script>

<style scoped>
.user-chat-bottom{
	display: flex;
	
	position: fixed;
	bottom: 20upx;
	height: 60upx;
	left: 0;
	right: 0;
	padding: 0 20upx ;
	border-top: 1px solid #EEEEEE; 
	 background: #FFFFFF;
}

.user-chat-bottom>view{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50upx;
	width: 80upx;
	background: yellow;
	 /* margin-right: 120upx; */
	/* border: 1px solid blue; */
}
.user-chat-bottom>input{
	border: 1px solid red;
	 flex: 1; 
	  margin-right: 20upx; 
	 padding: 10upx 20upx;
	 border-radius: 10upx;
}
</style>
