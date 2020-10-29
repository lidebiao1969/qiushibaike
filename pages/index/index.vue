<template>
	<view >
		<!--  <view class="uni-tab-bar">
			<scroll-view  scroll-x class="uni-swiper-tab" >
				<block v-for="(tab,index) in tabBars" :key="tab.id"  >
					<view  class="swiper-tab-list" 
					 :class="{'active':(tabIndex==index)}"
					 @tap="tabtap(index)">
					 {{tab.name}}
					 
					  <view class="uni-tab-line"></view> 
						</view>
				</block>
				
			</scroll-view>
		</view> -->
		 <roll-tab-bar 
		:tabBars="tabBars"	
		:tabIndex="tabIndex" 
		@tabtap="tabtap">
		</roll-tab-bar>
		
		<view class="uni-tab-bar">
			<swiper  :current="tabIndex" class="swiper-box" :style="{height:swiperHeight+'px'}" @change="ontabchange">
				<swiper-item  v-for="(items,index1) in newslist" :key="index1">
					<scroll-view scroll-y="true"  class='list' @scrolltolower="loadmore(index1)">
						<template v-if="items.list">
							<view    v-for="(item,index2) in items.list" :key="index2" >
								<index-list :item="item" :index="index"></index-list>	
							</view>
							<!-- 上拉加载 -->
							 <load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<view class="nothing animated  fadeInLeftBig">
								<image src="../../static/none.jpg" mode="aspectFill"></image>
							</view>
						</template>
					
					
					</scroll-view>
					
					
				</swiper-item>
				
			</swiper>
		</view>
		
		
	
	
	</view>
</template>

<script>
	import rollTabBar from "../../components/roll-tab-bar/roll-tab-bar.vue"
	import URL from '../../common/url.js'
	export default {
		
		data() {
			return {
				loadtext:'',
				type: 'middle',
				index:0,
				swiperHeight:600,
				tabIndex:0,
				tabBars: [],				
				newslist:[]	
			} 
		},
		components:{
			rollTabBar
		},
		onNavigationBarSearchInputClicked: () => {
			/* uni.navigateTo({
				url:"../submit/submit"
			}) */
		},
		onNavigationBarButtonTap(e) {
		console.log(e)
			if(e.index==1){
				uni.navigateTo({
					url:"../submit/submit"
				})
			}
			
			
		},
		onLoad() {
			
		  this.loadData();
		
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-uni.upx2px(100)
					//console.log("height : "+height)
					this.swiperHeight=height
				}
			})
		},
		/* onShow() {
			console.log('$url: ')
				console.log(this.$url)
		}, */
		methods: {
		async loadData() {  
				let tabBars = await this.$api.json('navBars');				
				this.tabBars = tabBars;
				// console.log(this.tabBars)
				let newslist = await this.$api.json('newslist');
				this.newslist = newslist || [];
				//console.log(this.newslist.length)
				
				//console.log(this.newslist) 
			},
		
			
		tabtap(index){
				
				this.tabIndex=index
			
				
			},	  
	ontabchange(e) {
		    let index = e.target.current || e.detail.current;
		    this.tabIndex=index
			console.log("tabIndex : " +index)
		},
	loadmore(index){
		//console.log('index :'+index);
		
			if (this.newslist[index].loadtext!='上拉加载更多'){return;}
		this.newslist[index].loadtext='加载中';
			uni.showToast({
				icon: 'none',
				title: "加载中" 
			})
		setTimeout(()=>{
				let obj={
			userpic:URL.url+"/zzf/z1.png",
			nickname:"zzf",
			showupz:true,
			isguanzi:true,
			title:"我想出手，就那么难。。。",
			type:"pic",
			titlepic:URL.url+"/zzf/z1.png",
			infornum:{
				index:0,
				dingnum:10,
				cainum:9
				},
				commentnum:2,
				sharenum:5
								
		};
		this.newslist[index].list.push(obj);
		this.newslist[index].loadtext='上拉加载更多';
			},1000);
			
		}
					//占位	
						
		}
	}
</script>

<style>
	@import './index.css';
.swiper-box{
	
}
page{
	width: 100%;
	margin: 0 auto;
}
	.nothing{
		background-color: #FFFFFF;
		text-align: center;
		margin-top: 30upx;
	}
	.nothing image{
		width: 80%;
	}
	.popup-content {
		background-color: #fff;
		padding: 15px;
	}
	
</style>
