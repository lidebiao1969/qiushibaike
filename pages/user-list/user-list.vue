<template>
	<view class="page">
		<roll-tab-bar
		:tabBars="navbars"	
		:tabIndex="tabIndex" 
		@tabtap="tabtap"
		scrollStyle="border-bottom:0;"
		scrollItemStyle="width:33%;">
		</roll-tab-bar> 
	
	<view class="uni-tab-bar">
		<swiper  :current="tabIndex" class="swiper-box" :style="{height:swiperHeight+'px'}" @change="ontabchange">
			<swiper-item  v-for="(items,index1) in friendList" :key="index1">
				<scroll-view scroll-y="true"  class='list' @scrolltolower="loadmore(index1)">
					<template v-if="items.list">
						<view    v-for="(item,index2) in items.list" :key="index2" >
							<friend-list-com :item="item" :index="index2" ></friend-list-com>
						</view>
						<!-- 上拉加载 -->
						 <load-more :loadtext="items.loadtext"></load-more>
					</template>
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
				tabIndex:0,
				navbars:[
					{name:'互关',id:'huguan',num:10},
					{name:'关注',id:'guanzhu',num:10},
					{name:'粉丝',id:'fengfi',num:10}
				],
				friendList:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							}
							],
					},					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈111',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈112',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							}
							],
					},	{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈222',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈223',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							}
							],
					}
					
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
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
			
			tabtap(index){this.tabIndex=index},
			ontabchange(e) {
				    let index = e.target.current || e.detail.current;
				    this.tabIndex=index
					console.log("tabIndex : " +index)
				},
			loadmore(index){
				//console.log('index :'+index);
				
					if (this.friendList[index].loadtext!='上拉加载更多'){return;}
				this.friendList[index].loadtext='加载中';
					uni.showToast({
						icon: 'none',
						title: "加载中" 
					})
				setTimeout(()=>{
						let obj={
					userpic:"../../static/zzf/z1.png",
					username:"zzf",
					sex:1,
					age:20,
					isguanzi:true
					}
				this.friendList[index].list.push(obj);
				this.friendList[index].loadtext='上拉加载更多';
					},1000);
					
				}
		}
	}
</script>

<style >
.page{
	padding: 0 50upx;
}
.uni-tab-bar{
	 /* border: 1px solid red ; */
}
.list{
	 width: 100% !important; 
	/* border: 1px solid blue ; */
}
</style>
