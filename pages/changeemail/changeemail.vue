<template>
	<view class="u-padding-h-20upx u-margin-v-20upx">
		<input type="text"   class="uni-input common-input" 
		placeholder="输入邮箱" v-model="email"/>
		<input type="text"   password  class="uni-input common-input" 
		placeholder="输入密码>6位" v-model="password"/>
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
				email:'',
				password:'',
				disabled:true,
				loading:false
			}
		},
		watch:{
			email(val){
				this.change();
			},
			password(val){
				this.change();
			}
		},
		methods: {
			change(){
				if(this.email && this.password  ){
					this.disabled=false;
					return;
				}
				 this.disabled=true
			},
			check(){
				//console.log(this.oldpassword)
				if(!this.email || this.email ==''){
					uni.showModal({
						title:'邮箱不能为空',
						icon:"none"
					})
					return false;
				}
				
				//验证邮箱格式
				 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if (!reg.test(this.email)) 
				{ 
					uni.showModal({
						title:'邮箱格式错误',
						icon:"none"
					})
				 return false;} 
				
				//console.log(this.newpassword)
				if(!this.password || this.password ==''){
					uni.showModal({
						title:'密码不能为空',
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
