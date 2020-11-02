<template>
	<view class="page">

		<!-- 操作菜单 -->
		

	
	<!-- 	<view class="paper-right-popup-mask" v-show="show" @tap="hidepopup">

			<view class="paper-right-popup" v-show="show">

				<view class="u-f-ac" hover-class="paper-right-popup-h" @tap='addfriend'>

					<view class="iconfont icon-soushuo-copy" ></view>
					 添加糗友

				</view>
				 <view class="u-f-ac" hover-class="paper-right-popup-h" @tap="clear">
					<view class="iconfont icon-qingchu1"> </view>
					 清除糗友
				</view> 
			</view>
		</view> -->
		
		<paper-right-popup :show="show" 
			@hidepopup="hidepopup" 
			@addfriend="addfriend" 
			@clear="clear" >
		</paper-right-popup>
		
		
		<view v-for="(item,index) in list " :key="index" @click="go(index)" >
			<paper-list :list="item" ></paper-list>
		</view>
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
				show:false,
				loadtext:"上拉加载更多",
				list:[{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:123
				},
				{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				}]
			}
			
		},
		
		onPullDownRefresh() {
			this.getData();
		},
		onReachBottom(){
			this.getD();
		},

		onNavigationBarButtonTap(e) {
			// console.log(e)
		switch(e.index){
			 case 0:
				uni.navigateTo({
					url:"../user-list/user-list"
				});
			break;
			case 1:
				this.show=true;
			break;
			} 
		},

		methods: {
			addfriend(){
				console.log("加好友")
				this.hidepopup()
			},
			
			clear(){
				console.log("clearfriend")
				this.hidepopup()
			},
			showpopup(){
				this.show=true
			},
			hidepopup(){
				this.show=false
			},
			

			go(index){
				uni.navigateTo({
					url:"../user-chat/user-chat"
				})
			},
			getData(){
				setTimeout(()=>{
				let arr=[{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称1111",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:123
				},
				{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称2222",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称3333",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称4444",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称5555",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称6666",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				}]	;
				this.list=arr;
				uni.stopPullDownRefresh();
				},2000);
				
				
			},
		
		getD(){				
			if (this.loadtext!='上拉加载更多'){return;}
				
				this.loadtext='加载中';
					uni.showToast({
						icon: 'none',
						title: "加载中" 
					})
				setTimeout(()=>{
						let obj=this.list[1];
				this.list.push(obj);
				this.loadtext='上拉加载更多';
					},2000);
					
		}
		//点位		
		}
		
	}
</script>

<style scoped>
	.page{
		margin: 0 20upx;
		}
	
	
</style>
