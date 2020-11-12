<template>
	<view>
		<!-- 未登录 -->
			<template v-if="!islogin">
				<not-login-com></not-login-com>
			</template>
		<!-- 已登录 -->
			<template v-else>
				<home-login-com :homeInfo="homeInfo"></home-login-com>
			</template>
	<!-- 	数据 -->
	
		<home-data-com :homeData="homeData"></home-data-com>
	
		<!-- 广告 -->
		<view class="ad">
			 <image src="../../static/zzf/shuijiao.jpg" mode="widthFix"></image> 
		</view>
		<!-- 列表 -->
		<view class="u-margin-h-50upx">
			<block v-for="(item,index) in list" :key="index">
				<home-list-com :item="item" :index="index"></home-list-com>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				islogin:true,
				homeInfo:{
					userpic:"../../static/HEAD/man.png",
					username:"楚客",
					totalnum:10,
					todaynum:5
				},
				homeData:[
					{name:"糗事",num:0},
					{name:"动态",num:0},
					{name:"评论",num:0},
					{name:"收藏",num:0}
				],
				list:[
					{"icon":"liulan","name":"浏览历史"},
					{"icon":"huiyuanVIP","name":"糗百认证"},
					{"icon":"keyboard","name":"审核糗事"}					
				],
				title: 'AD组件',
				unitId: '',
				isLoad: false,
				adMessage: "广告加载中..."
			}
		},
		
		methods: {
			adload() {
			    this.isLoad = true;
			},
			aderror(e) {
			    this.adMessage = e.detail.errMsg;
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateTo({
					url: '../user-setting/user-setting',
				});
				}
		}
	}
</script>

<style>



.ad{
	padding: 30upx;
	box-sizing: border-box;
}
.ad>image{
	width: 100%;
	height: 200upx;
}



</style>
