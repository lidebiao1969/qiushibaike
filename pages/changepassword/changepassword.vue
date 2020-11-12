<template>
	<view class="u-padding-h-20upx u-margin-v-20upx">
		<input type="text"  password class="uni-input common-input" 
		placeholder="输入旧密码" v-model="oldpassword"/>
		<input type="text"   password  class="uni-input common-input" 
		placeholder="输入新密码" v-model="newpassword"/>
		<input type="text"  password   class="uni-input common-input" 
		placeholder="确认新密码"v-model="renewpassword"/> 
		<button type="primary" class="user-set-btn " 
		:disabled="disabled"  :class="{'user-set-btn-disable':disabled}"  
		:loading="loading"
		 @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword:'',
				newpassword:'',
				renewpassword:'',
				disabled:true,
				loading:false
			}
		},
		watch:{
			oldpassword(val){
				this.change();
			},
			newpassword(val){
				this.change();
			},
			renewpassword(val){
				this.change();
			}
		},
		methods: {
			change(){
				if(this.oldpassword && this.newpassword  && this.renewpassword ){
					this.disabled=false;
					return;
				}
				 this.disabled=true
			},
			check(){
				//console.log(this.oldpassword)
				if(!this.oldpassword || this.oldpassword ==''){
					uni.showModal({
						title:'旧密码不能为空',
						icon:"none"
					})
					return false;
				}
				//console.log(this.newpassword)
				if(!this.newpassword || this.newpassword ==''){
					uni.showModal({
						title:'新密码不能为空',
						icon:"none"
					})
					return false;
				}
				if(!this.renewpassword || this.renewpassword ==''){
					uni.showModal({
						title:'确认密码不能为空',
						icon:"none"
					})
					return false;
				}
				if(this.renewpassword != this.newpassword){
					uni.showModal({
						title:'确认密码和新密码不相等',
						icon:"none"
					})
					return false;
				}
				return true;
				
			},
			
			submit(){
				this.loading=true;
				if(!this.check()){this.loading=false;this.disabled=true;return};
					setTimeout(()=>{
						uni.showToast({
						title:'提交服务器',
						icon:"none",
					})
					this.loading=false;
					this.disabled=true;
					},2000)
					
					
				
				
			}
		}
	}
</script>

<style>
.user-set-btn{
	background: #ffe933;
	width: 100%;
	color: black;
	border-radius: 20upx;
}
.user-set-btn-disable{
	background: #eeeeee !important;
	color: #BEBEBE!important;
}
.common-input{
	font-size: 35upx;
	border-bottom: 1px solid #eeeeee;
}
</style>
