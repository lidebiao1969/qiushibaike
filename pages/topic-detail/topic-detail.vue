<template>
	<view>
		
		<topic-title :item="topicinfo"></topic-title>
		
  <!-- tab 切换 -->
		 <roll-tab-bar
		:tabBars="navbars"	
		:tabIndex="tabIndex" 
		@tabtap="tabtap"
		scrollStyle="border-bottom:0;"
		scrollItemStyle="width:50%;">
		</roll-tab-bar> 
	<!-- detail详情	 -->
	<view class="topic-detail-list">
			<!-- 内容列表 -->
			<block v-for="(items,index) in tablist " :key="index" @tabtap="loadmore(index)">
				<template v-if="tabIndex==index">
				 <block v-for="(list, listindex) in items.list" :key="listindex" >
				<common-list :item="list" :index="listindex"></common-list>
			</block> 
			<!-- 上拉加载 -->
			<load-more :loadtext="items.loadtext"></load-more>	
		</template>
			
			</block>
		</view> 
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
				navbars:[
					{name:'默认',id:'moren'},
					{name:'最新',id:'zuixin'}
				],
				topicinfo:{
					titlepic:"../../static/moguwu.jpeg",
					title:"忆往事，敬余生",
					desc:"我是描述",
					tatalnum:1000,
					todaynum:50
				},
				tablist:[
					{
						loadtext:"上拉加载更多",
						list:[
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
						
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/HEAD/man.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzi:false,
								title:'我是标题',
								titlepic:'../../static/HEAD/man.png',
								video:false,
								share:false,
								path:'深圳 龙岗',
								sharenum:20,
								commentnum:5,
								goodnum:123
								
							},
							//文字
							{
								userpic:"../../static/HEAD/mm2.png",
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
								userpic:"../../static/HEAD/mm2.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:27,
								isguanzi:false,
								title:'我是视频标题',
								titlepic:'../../static/HEAD/mm2.png',
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
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:28,
								isguanzi:false,
								title:'我是分享标题',
								titlepic:'',
								video:false,
								share:{
									title:'我是分享标题',
									titlepic:'../../static/HEAD/mm1.png'
								},
								path:'深圳 龙岗',
								sharenum:20,
								commentnum:5,
								goodnum:123
								
							}
						]
					}
				]
			}
		},
		onReachBottom() {
			this.loadmore();
		},
		onPullDownRefresh() {
			this.getData();
		},
		methods: {
			getData(){
				setTimeout(()=> {
				let	arr=[
							{
								userpic:"../../static/HEAD/song.jpg",
								username:'哈哈123',
								sex:0,  //0 男 1 女
								age:25,
								isguanzi:false,
								title:'我是标题344',
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
								
							}]
					this.tablist[this.tabIndex].list=arr;
				
				            uni.stopPullDownRefresh();
				        }, 1000);
				 
			},
			
			tabtap(index){this.tabIndex=index},
			loadmore(){
				
					
						if (this.tablist[this.tabIndex].loadtext!='上拉加载更多'){return;}
					this.tablist[this.tabIndex].loadtext='加载中';
						uni.showToast({
							icon: 'none',
							title: "加载中" 
						})
					setTimeout(()=>{
							let obj=this.tablist[this.tabIndex].list[1];
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext='上拉加载更多';
						},2000);
						
					}
		}
	}
</script>

<style>


</style>
