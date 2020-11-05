<template>
	<view class="page">

		<!-- 操作菜单 -->
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
			//console.log(e);
			if(e.index==0){
				uni.navigateTo({
					url:"../user-list/user-list"
				})
			}
			if(e.index==1){
				this.showpopup()
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
				console.log(index);
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
	
	



































=======
	.u-f-ac{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.paper-right-popup-mask{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
	}
	.paper-right-popup{
		padding: 20upx 20upx;
		position: fixed;
		right: 0;
		
		/* #ifdef APP-PLUS */
		top:10upx;
		/* #endif */
		/* #ifdef H5 */
		top:70upx;
		/* #endif */
		z-index: 100;
		width: 250upx;
		
		background-color: #FFFFFF;
		box-shadow: 1upx 1upx 20upx 2upx #cccccc;
	}
	.paper-right-popup-h{
		background-color: red;
	}
	.paper-right-popup>view>view{
		margin-right: 20upx;
	}
>>>>>>> .theirs
</style>
