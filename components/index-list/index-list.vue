<template>
	<view>
		<view class="list-box  animated fadeInLeft ">
				 <view class="index-list1">
						<view class="index-title">
							<image :src="item.userpic" mode="widthFix" class="img1"></image>
							<view class="nick">
								<text>{{item.nickname}}</text>
								<text v-if="item.showupz">优秀up主</text>
							</view>
						</view>
						<view class="index-guanzi" @tap="guanzi">
										<text class="guanzi iconfont" v-if="isguanzi" >&#xe664; 关注</text>		
											<text class="guanzi iconfont" v-else>&#xe665; 已关注</text>	
											<text class="iconfont"> &#xe66b;</text>
							</view>
					</view> 
					
					<view class="index-list2" @tap="opendetail">
						<text class="active-title">{{item.title}}</text>
					</view>
					
					<view class="index-list3" @tap="opendetail" >	
							<view class="index-video" v-if="item.type=='pic'">
								<image :src="item.titlepic" mode="aspectFill" class="list2-img"></image>
							</view>
							<view class="index-video" v-if="item.type=='video'">
								<video show-fullscreen-btn :src="item.titlepic"  class="list2-img" objectFit="fill"></video>
								<text class="iconfont index-play"> &#xe666;</text>
								<text class="index-message">播放数:{{item.playnum}},时长:{{item.timelong}}</text>
							</view>
				
					</view>
				
					
				<view class="index-list4">
						<view class="comment">
							<view class="comment-ding" >
								<text class="iconfont">&#xe6cc;</text>
								<text style="margin: 0 5px;"  @click="dingcai('ding')">{{infornum.dingnum}}</text>
								<text class="iconfont">&#xe62b;</text>
								<text  style="margin: 0 5px;"  @click="dingcai('cai')">{{infornum.cainum}}</text>
							</view>
							<view class="comment-share">
								<text class="iconfont">&#xe69a;</text>
								<text style="margin: 0 5px;">{{item.commentnum}}</text>
								<text class="iconfont">&#xe817;</text>
								<text style="margin: 0 5px;">{{item.sharenum}}</text>
							</view>
							
							
						</view>
						
				
				
				
				
			
			</view>
		</view>
		
		
		</view>
		
		
	</view>
</template>

<script>
	export default {
		
		props:{
			item:Object,
			index:Number
		},
		data(){
			return{
				isguanzi:this.item.isguanzi,
				infornum:this.item.infornum
			}
		},
		methods:{
		opendetail(){
				uni.navigateTo({
					url:"../../pages/detail/detail?detailData="+ JSON.stringify(this.item)
				})
			},
		guanzi(){ 
			this.isguanzi=!this.isguanzi;
			uni.showToast({
				title:"关注",
				mask:false,
				duration:1000
			})
		},
		
/* 		infornum:{
			index:0,
			dingnum:10,
			cainum:9
			} */
		dingcai(type){
			//console.log(type)
				//console.log(this.item.infornum.index)
			if (this.infornum.index==0){
				if(type=="ding"){
				this.infornum.dingnum++
				this.infornum.cainum--
				this.infornum.index=1
			}else{
				this.infornum.cainum++
				this.infornum.dingnum--
				this.infornum.index=2
			}
			}
			
			
			
			
		}
		}
		
		
	}
</script>

<style>


.list-box{
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
.index-list1{
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}
.img1{
	width: 50upx;
	height: 50upx;
	border-radius: 50%;
}
.nick{
	margin: 0 10px;
	font-size: 10px;
	display: flex;
	flex-direction: column;
}
 .index-title{
	 
	display: flex;
	flex-direction: row;
}
.index-guanzi{
	display: flex;
	justify-content: center;
	align-items: center;
}
.guanzi{
	margin: 10px 10px;
	background-color: yellow;
	border-radius: 20%;
}
.index-list2{
	width: 100%;
	
	margin: 10upx ;
}

.list2-img{
	width: 100%;
	height: 300upx;
}
.index-list{
	padding: 5px;
	border-bottom: 1px solid #efefef;
	display: flex;
	flex-direction: column;
}
.comment{
	display: flex;
	justify-content: space-between;
}
.comment-ding{
	margin-left: 5upx;
}
.comment-share{
	margin-right: 5upx;
}
.index-list3{
	display: flex;
	flex-direction: column;
}

.index-video{
	position: relative;
	width: 100%;
	height: 300upx;
	
}
.index-play{
	position: absolute;
	font-size: 30px;
	right: 50%;
	top:50%
}
.index-message{
	position: absolute;
	font-size: 30upx;
	bottom: 5px;
	right: 10px;
	color: red;
	background-color: #0077AA;
	border-radius: 10px;
	z-index: 3;
}
</style>
