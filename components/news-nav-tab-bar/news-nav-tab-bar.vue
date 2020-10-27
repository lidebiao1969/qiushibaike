<template>
	<view>
		<!-- 新闻导航栏 -->
		<uni-nav-bar  fixed="true" :statusBar="true" @clickRight="openAdd" >
			
			<block slot="left">
				<view class="nav-left">
				<view class="iconfont icon-daitarenqian " ></view>
				</view>
			</block>
		<!-- 	中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<roll-tab-bar 	
					:tabBars="navbars"	
					:tabIndex="tabIndex" 
					@tabtap="select"
					scrollStyle="border-bottom:0;">
				</roll-tab-bar>
				
			</view>
			
			<!-- 右侧 -->
			<block slot="right" >
				<view class="nav-right">
				<view class="iconfont icon-fatie1" ></view>
				</view>
			</block>
				
			
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		props:{
			navbars:Array,
			tabIndex:Number
		},
		methods:{
			/* select(index){
				this.tabIndex=index
				console.log(index)
			}, */
			select(index){
				this.$emit("change-Tab",index)
			},
			
			openAdd(){
				uni.navigateTo({
					url:"../submit/submit"
				})
			}
		}
		
	}
</script>

<style scoped>
/* 导航栏 */
.u-f-ajc{
	display: flex;
	
	 justify-content: center;
	align-items: center; 
}


.nav-left,  .nav-right{
	width: 100%;
	
}

.nav-right{
	text-align: right;
	margin-right: 15upx;
}
	.nav-left{
		margin-left: 10upx;
		
	}



.nav-tab-bar{
	width: 100%;

	position: relative;
}
.nav-tab-bar>view{
	font-size: 32upx;
	font-weight: bold;
	padding: 0 15upx;
	color:#969696; 
}

.active{
	
	color: #333333 !important;
	
}
.nav-tab-bar-line{
	position: absolute;
	border-bottom: 5upx solid #fede33;
	border-top: 5upx solid #fede33;
	width: 70upx;
	border-radius: 20upx;
	bottom: 0
}
.u-f-c{
	text-align: center;
}
.nav-tab-bar>roll-tab-bar{
	border-bottom: none;
}
</style>
