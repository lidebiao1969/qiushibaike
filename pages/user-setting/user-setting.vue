<template>
	<view class="u-padding-h-20upx">
		<!-- 列表 -->
		<view class="u-margin-h-50upx ">
			<block v-for="(item,index) in list" :key="index">
				<home-list-com :item="item" :index="index" :activeColor="activeColor"></home-list-com>
				<view class="u-margin-v-20upx"></view>
			</block>
		</view>
		<button class="user-set-btn" type="primary">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeColor:'#333333',
				list:[
					{"icon":"","name":"账号与安全",type:'navigateTo',url:'../../pages/changepassword/changepassword'},
					{"icon":"","name":"绑定邮箱",type:'navigateTo',url:'../../pages/changeemail/changeemail'},
					{"icon":"","name":"资料编辑",type:'navigateTo',url:'../../pages/user-set-userinfo/user-set-userinfo'},
					{"icon":"","name":"小纸条",type:'navigateTo',url:''},
					{"icon":"","name":"清除缓存",type:'navigateTo',url:''},
					{"icon":"","name":"意见反馈",type:'navigateTo',url:''},					
					{"icon":"","name":"关于糗百",type:'navigateTo',url:''}					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
.user-set-btn{
	
	background: yellow;
	width: 100%;
	color: black;
	border-radius: 20upx;
}
</style>
