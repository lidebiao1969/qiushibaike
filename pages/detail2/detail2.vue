<template>
	<view>
		<detailInfo :item="detailList"  ></detailInfo>
		
		<view class="new-comment">最新评论{{comment.count}}</view>
		<view class="uni-padding-wrap">
		    <!-- 评论区 start -->
			<view class="uni-comment">
					<block v-for="(item,index) in comment.list" :key = "index">
						<!-- <uni-collapse :accordion="true">
							<uni-collapse-item  :title="item.username" :show-animation="true"> -->
								 <uni-comment :item="item" :index="index"></uni-comment> 
								<!-- <text class="content">{{ item.content }}</text> -->
							<!-- </uni-collapse-item>
						</uni-collapse> -->
					</block>
			</view>
		</view>
		
		<view style="margin-top: 30px;height: 100px;"></view>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
			<!-- 分享 -->
		<sharelist-com :show="showShare" @toggle="toggle" @select="select"></sharelist-com>
		
	</view>
</template>

<script>
	import timeFrom  from "../../common/timeFrom.js"
	export default {
		
		//,"/static/zzf/z2.png","/static/zzf/z3.png"
		data() {
			
			return {
				showShare:false,
				comment:{
					count:20,
					list:[]
				},
						commenttitle: '最新评论',
				
				detailList:{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:1,  //0 男 1 女
						age:25,
						isguanzi:false,
						title:'我是标题',
						titlepic:'"/static/zzf/z1.png"',
						morepic:["/static/zzf/z1.png","/static/zzf/z2.png","/static/zzf/z3.png"],
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						day:"26天前",
						commentnum:5,
						goodnum:123
						
					}
			}
		},
		onLoad(e) {
			this.init(JSON.parse(e.detailData));
			this.getDetailData();
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.toggle();
			}
		},
		methods: {
			toggle(){
				this.showShare=!this.showShare
			},
			select(item,index){
				console.log(index);
				console.log(JSON.stringify(item));
			},
			
			
			init(obj){
				this.detailInfo=obj;
				uni.setNavigationBarTitle({
					title:obj.title,
					})
			},
			getDetailData(){
				let arr=[{
							id:1,
							fid:0,
							userpic:"/static/zzf/z1.png",
							username:"zzf1",
							data:"支持国产，支持DCloud!",
							time:"1604571744"
						},
						{
							id:2,
							fid:1,
							userpic:"/static/zzf/z2.png",
							username:"zzf2",
							data:"时间戳转换成时间日期格式",
							time:"1604572744"
						},{
							id:3,
							fid:0,
							userpic:"/static/zzf/z3.png",
							username:"zzf3",
							data:"时间日期转换时间戳",
							time:"1604591744"
						},{
							id:4,
							fid:3,
							userpic:"/static/zzf/z4.png",
							username:"zzf4",
							data:"Unix时间戳在线转换器",
							time:"1604658864"
						}];
				
			
			
			 arr.forEach((v)=>{
				v.time=timeFrom(v.time);
			}); 
		this.comment.list=arr;
		//console.log(JSON.stringify(this.comment.list[0]));
		
			},
			
			
			submit(t){
				//console.log(t)
			}
		}
	}
</script>

<style scoped>
	.content {
		padding: 15px;
		font-size: 14px;
		line-height: 20px;
		background-color: #f9f9f9;
		color: #666;
	}
	.uni-padding-wrap {
	    padding: 30upx;
	}
	
	.uni-comment {
	    padding: 5rpx 0;
	    display: flex;
	    flex-grow: 1;
	    flex-direction: column;
	}
	
	
	

</style>
