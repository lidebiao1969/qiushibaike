<template>
	<view class="page">
		<!-- 操作菜单 -->
		 <view class="paper-right-popup-mask">
			<view class="paper-right-popup" v-show="show">
				<view class="u-f-ac"  @tap='addfriend'>
					<view class="iconfont icon-soushuo-copy"
					 hover-class="paper-right-popup-h"> 
					 </view>
					 添加糗友
				</view>
				<view class="u-f-ac" @tap="clear">
					<view class="iconfont icon-qingchu1" 
					hover-class="paper-right-popup-h" >
					 </view>
					 清除缓存
				</view>
			</view>
		</view> 
		
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
				show:true,
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
		
		methods: {
			addfriend(){
				console.log("加好友")
				this.hidepopup()
			},
			clear(){
				console.log("清除好友")
				this.hidepopup()
			},
			showpopup(){
				this.show=true
			},
			hidepopup(){
				this.show=false
			},
			go(index){
				console.log(index);
				this.show=false;
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
		},
		onNavigationBarButtonTap(e) {
			//console.log(e);
			if(e.index==1){
				this.showpopup()
			} 
		}
		
	}
</script>

<style scoped>
	.page{
		margin: 0 20upx;
		}
	.u-f-ac{
		display: flex;
		justify-content: center;
		align-items: center;
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
</style>
