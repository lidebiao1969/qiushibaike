<template>
	<view class="page">
		<!-- 新闻导航栏 -->
	 <news-nav-tab-bar 
	:navbars="navbars" 
	:tabIndex='tabIndex' @change-Tab="changeTab">
		
	</news-nav-tab-bar> 
	
	<view class="uni-tab-bar">
		<swiper  class="swiper-box"  
				:current="tabIndex" 
				:style="{height:swiperHeight+'px'}" 
				@change="ontabchange">		
			
			<swiper-item>
				<scroll-view scroll-y="true"   class='list' @scrolltolower="loadmore">
					<!-- 内容列表 -->
					 <block v-for="(item, index) in guanzhu.list" :key="index" >
						<common-list :item="item" :index="index"></common-list>
					</block> 
					<!-- 上拉加载 -->
					<load-more :loadtext="guanzhu.loadtext"></load-more>
					
				</scroll-view>
			</swiper-item>
			
			<!-- 话 题 -->
			<swiper-item>
				<scroll-view scroll-y="true"   class='list'>
				<!-- 一、	搜索框 -->
				<view class="search-input">
					<input  class="uni-input" placeholder-class="uni-icon uni-icon-help  topic-search-input" placeholder=" 搜索内容" />
				</view>
				
				<!-- 二、轮播图 -->
			               
					<swiper class="topic-swiper" indicator-dots="true" autoplay="autoplay" interval="3000" duration="1000">
						<block v-for="(item,index) in topic.swiper" :key="index">
							<swiper-item>
								<image :src="item.src" mode="aspectFill"></image>
							</swiper-item>
						</block>
					</swiper>
			               
				<!-- 三、热门分类 -->
				
				<hot-classify :nav="topic.nav"></hot-classify>
				
				<!-- 四、最近更新 -->
				
					<topic-update :items="topic.motive" ></topic-update>

					
			
					
					
			</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperHeight:600,
				isguanzi:true,
				tabIndex:0,
				topic:{
					swiper:[
						{src:"../../static/zzf/z1.png"},
						{src:"../../static/zzf/z2.png"},
						{src:"../../static/zzf/z3.png"}
					],
					motive:[
						{
							titlepic:"../../static/zzf/z1.png",
							title:"标题",
							context:"13:36:15.149 开始差量编译...13:",
							totalnum:30,
							todaynum:5
						},	{
							titlepic:"../../static/zzf/z2.png",
							title:"标题",
							context:"13:36:15.149 开始差量编译...",
							totalnum:30,
							todaynum:5
						},	{
							titlepic:"../../static/zzf/z3.png",
							title:"标题",
							context:"13:36:15.149 开始差量编译",
							totalnum:30,
							todaynum:5
						}
					],
					nav:[
						{name:"二次元"},
						{name:"城 市"},
						{name:"喜 爱"},
						{name:"娱 乐"},
						{name:"游 戏"},
						{name:"情 感"}
					]
				},
				navbars:[
					{name:'关注',id:'guanzi'},
					{name:'话题',id:'topic'}
				],
			guanzhu:{
				loadtext:"上拉加载更多",
				list:[
					//图文
					{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:0,  //0 男 1 女
						age:25,
						isguanzi:false,
						title:'我是标题',
						titlepic:'../../static/HEAD/song.jpg',
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						commentnum:5,
						goodnum:123
						
					},
					//文字
					{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:1,  //0 男 1 女
						age:26,
						isguanzi:false,
						title:'我是文字标题',
						titlepic:'',
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						commentnum:5,
						goodnum:123
						
					},
					//视频
					{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:1,  //0 男 1 女
						age:27,
						isguanzi:false,
						title:'我是视频标题',
						titlepic:'../../static/HEAD/song.jpg',
						video:{
							looknum:'20w',
							long:'2:47'
						},
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						commentnum:5,
						goodnum:123
						
					},
					//分享
					{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:0,  //0 男 1 女
						age:28,
						isguanzi:false,
						title:'我是分享标题',
						titlepic:'',
						video:false,
						share:{
							title:'我是分享标题',
							titlepic:'../../static/HEAD/song.jpg'
						},
						path:'深圳 龙岗',
						sharenum:20,
						commentnum:5,
						goodnum:123
						
					}
				]
			}	

			}
		},
		onLoad() {
			
		  
		
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-uni.upx2px(100)
					//console.log("height : "+height)
					this.swiperHeight=height
				}
			})
		},
	methods: {
		changeTab(index){
				this.tabIndex=index
			},
		ontabchange(e) {
			    let index = e.target.current || e.detail.current;
			    this.tabIndex=index
			//	console.log("tabIndex : " +index)
			},
		loadmore(){
				//console.log('index :'+index);
				
					if (this.guanzhu.loadtext!='上拉加载更多'){return;}
				this.guanzhu.loadtext='加载中';
					uni.showToast({
						icon: 'none',
						title: "加载中" 
					})
				setTimeout(()=>{
						let obj=this.guanzhu.list[1];
				this.guanzhu.list.push(obj);
				this.guanzhu.loadtext='上拉加载更多';
					},2000);
					
				}
		//占位	
								
				}
		}

		
	
</script>

<style scoped>
	.page{
		margin: 0 15rpx;
	}
.search-input{
	margin-top: 40rpx;
	padding: 20rpx 0;
	
}
.search-input>input{
	background: #F4F4F4;
	
	border-radius: 20rpx;
}
.topic-search-input{
	text-align: center;
	
}	
.topic-swiper{
	padding-bottom: 20rpx;
}
	.topic-swiper image{
		width: 100%;
	}
	

</style>
