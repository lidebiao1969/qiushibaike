<template>
	<view>
		
			<view class="common-list animated fadeInLeft ">
				
				<view class="common-list-l">
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
				
				<view class="common-list-r">
					<!-- 第一行 -->
						<view class="common-list-r-1  u-f-ac" >
								<view > {{item.username}}
									 <view class="sexage" :style="stylebackgrcolor">
										<text class="iconfont " 
										:class="[item.sex==0?'icon-nan':'icon-nv']">
										{{item.age}}
										</text>
									</view> 
								</view>
								<view >
									<text class="iconfont icon-close"></text>
								</view>  
						</view>
					<!-- 第二行 -->
					<view class="common-list-r-12">{{item.day}}</view>
					<view class="common-list-r-2">{{item.title}}</view>
					<!-- 第三行 -->
					 <view class="common-list-r-3" v-if="item.titlepic"> 
						<!-- 图片 -->
						<block v-for="(pic,index1) in item.morepic" :key="index1">
							<image :src="pic" mode="widthFix" lazy-load  @tap="showpic(index1)" ></image> 
						</block>
						
						
						<!-- 视频 -->
						<template v-if="item.video">
							<view class="common-list-play iconfont icon-bofang-copy"></view>
							<view class="common-list-playinfo">
								{{item.video.looknum}} 次播放{{item.video.long}}
							</view>
						</template>
						
					
					</view> 
					
					<view class="common-list-share" v-if="item.share">
						<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
						<view >{{item.share.title}}</view>
					</view>
					
					
					<!-- 第四行 -->
					<view class="common-list-r-4">
						<view class="common-list-r-4-path">{{item.path}}</view>
						<view class="common-list-r-4-comment">
							<text class="iconfont icon-fenxiang">{{item.sharenum}}</text>
							<text class="iconfont icon-pinglun">{{item.commentnum}}</text>
							<text  class="iconfont icon-dianzan">{{item.goodnum}}</text>
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
		data() {
			return {
				isguanzi:this.item.isguanzi,
				stylebackgrcolor:(this.item.sex==0)?"background-color:blue":"background-color:pink"
			}
		},
		
		methods:{
			guanzi(){
				this.isguanzi=!this.isguanzi;
				uni.showToast({
					title: '关注成功！'
				});
			},
			showpic(index1){
				uni.previewImage({
							current:index1,
							loop:true,
				            urls: this.item.morepic,
				           
				        });
			}
		}
	}
</script>

<style scoped>
/* 列表 */
	.common-list{
		display: flex;
		
		margin-top: 50upx;
		padding: 10upx;
		border-bottom: 1px solid #555555;
	}
	.common-list-l{
		flex-shrink: 0;
	}
	.common-list-l>image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}
	.common-list-r-1>view:first-child{
		display: flex;
	}
	.common-list-r-1>view:last-child{
		margin-right: 20upx;
	}
	.u-f-ac{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.common-list-r{
		display: flex;
		flex:1;
		flex-direction: column;
		margin-left: 15upx;
	}
	.sexage{
		width: 80upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 30%;
		text-align: center;
		margin-left: 10upx;
	}
	.common-list-r-3{
		position: relative;
	}
	.common-list-r-3>image{
		width: 100%;
		border-radius: 20upx;
		
	}
	.common-list-play{
		position: absolute;
		font-size: 120upx;
		top:35%;
		right: 40%;
		color: white;
	}
	.common-list-playinfo{
		position: absolute;
		right: 20upx;
		bottom: 20upx;
		color: white;
		background: rgba(51,51,51,0.73);
		border-radius: 10upx;
		padding: 0 15upx;
	}
	.common-list-share{
		display: flex;
		background: #EEEEEE;
		
		padding: 10upx;
		border-radius: 20upx;
	}
	.common-list-share>image{
		width: 100upx;
		height: 100upx;
		margin-right: 20upx;
		border-radius: 10upx;
	}
	.common-list-r-4{
		display: flex;
		justify-content: space-between;
		
	}
	.common-list-r-4-path{
		font-size: 12px;
	}
	.common-list-r-4-comment>text{
		font-size: 12px;
		padding: 10upx;
	}
</style>
