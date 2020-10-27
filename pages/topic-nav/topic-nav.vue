<template>
	<view>
		<roll-tab-bar
		:tabBars="tabBarT"	
		:tabIndex="tabIndex" 
		@tabtap="tabtap">
		</roll-tab-bar>
		
		
		<view class="uni-tab-bar">
			<swiper  :current="tabIndex" class="swiper-box" :style="{height:swiperHeight+'px'}" @change="ontabchange">
				<swiper-item  v-for="(items,index1) in topiclist" :key="index1">
					<scroll-view scroll-y="true"  class='list animated fadeInLeft' @scrolltolower="loadmore(index1)">
						<template v-if="items.list">
									<topic-update :items="items.list" ></topic-update>
							
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
	export default {
		data() {
			return {
				loadtext:'',
				index:0,
				swiperHeight:600,
				tabIndex:0,
				tabBarT:[],
				topiclist:[]	
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
		methods: {
		async loadData() {
				let tabBarT = await this.$api.json('navBarT');				
				this.tabBarT = tabBarT;
				// console.log(this.tabBars)
				let topiclist = await this.$api.json('topiclist');
				this.topiclist = topiclist || [];
				//console.log(this.topiclist[1].list)
				},
		tabtap(index){
				
				this.tabIndex=index
			console.log(this.tabIndex);
				
			},
		ontabchange(e) {
					    let index = e.target.current || e.detail.current;
					    this.tabIndex=index
						console.log("tabIndex : " +index)
					},
		loadmore(index){
				console.log('index :'+index);
				
					if (this.topiclist[index].loadtext!='上拉加载更多'){return;}
					
					
				this.topiclist[index].loadtext='加载中';
					uni.showToast({
						icon: 'none',
						title: "加载中" 
					})
				setTimeout(()=>{
						let obj={
							titlepic:"../../static/zzf/z3.png",
							title:"标题",
							context:"13:36:15.149 开始差量编译",
							totalnum:30,
							todaynum:5
			};
				this.topiclist[index].list.push(obj);
				console.log(this.topiclist[index].list);
				this.topiclist[index].loadtext='上拉加载更多';
					},1000);
					
				}
					
					//占位
		}
	}
</script>

<style>
	.nothing{
		background-color: #FFFFFF;
		text-align: center;
		margin-top: 30upx;
	}
	.nothing image{
		width: 80%;
	}
</style>
