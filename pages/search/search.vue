<template>
	<view>
		<view  v-if="isSearch">
			<template v-if="list.length>0 " >
					<view   v-for="(item,index) in list" :key="index" >
					<index-list :item="item" :index="index"></index-list>	
				</view>
				<!-- 上拉加载 -->
				 <load-more :loadtext="loadtext"></load-more>
			</template>
			<template v-else>
				<view class="nothing animated  fadeInLeftBig">
					<image src="../../static/none.jpg" mode="aspectFill"></image>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSearch:false,
				searchtext:"",
				loadtext:"上拉加载更多",
				list:[
					
				]
			}
		},
		onPullDownRefresh() {
		
			this.getData();	
			uni.stopPullDownRefresh();
		},
		onNavigationBarSearchInputChanged(e) {
			/* console.log(e) */
			this.searchtext=e.text
		},
		onNavigationBarSearchInputConfirmed(e) {
			/* console.log(e.text) */
			if(e.text){
			
			this.getData();	
			}
			
		},
		onNavigationBarButtonTap(e) {
	//	console.log(e)
			if (e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onReachBottom() {
			this.loadmore();
		},
		methods: {
			getData(){
				this.isSearch=true;
				/* 请求服务器带参数  this.searchtext */
				setTimeout(()=>{
						let arr=[{
							userpic:"/static/zzf/z1.png",
							nickname:"zzf",
							showupz:true,
							isguanzi:true,
							title:"我想出手，就那么难。。。",
							type:"pic",
							titlepic:"/static/zzf/z1.png",
							infornum:{
								index:0,
								dingnum:10,
								cainum:9
								},
								commentnum:2,
								sharenum:5
												
						},
						{
							userpic:"/static/zzf/z2.png",
							nickname:"zzf",
							showupz:true,
							title:"我想出手，就那么难。。。",
							type:"pic",
							titlepic:"/static/zzf/z2.png",
							playnum:"20w",
							timelong:"2:47",
							infornum:{
								index:0,
								dingnum:10,
								cainum:9
								},
								commentnum:2,
								sharenum:5
						},{
							userpic:"/static/zzf/z1.png",
							nickname:"zzf",
							showupz:true,
							isguanzi:true,
							title:"我想出手，就那么难。。。",
							type:"pic",
							titlepic:"/static/zzf/z1.png",
							infornum:{
								index:0,
								dingnum:10,
								cainum:9
								},
								commentnum:2,
								sharenum:5
												
						}];
							this.list=arr;
							uni.showToast({
								icon: 'none',
								title: "加载中" 
							})
					},1000);
					
				
			},
			loadmore(){
				if (this.loadtext!='上拉加载更多'){return;}
				
				this.loadtext='加载中';
								uni.showToast({
									icon: 'none',
									title: "加载中" 
								})
				setTimeout(()=>{
						let obj={
									userpic:"/static/zzf/z3.png",
									nickname:"zzf",
									showupz:true,
									isguanzi:true,
									title:"gggggggg。。。",
									type:"pic",
									titlepic:"/static/zzf/z3.png",
									infornum:{
										index:0,
										dingnum:10,
										cainum:9
										},
										commentnum:2,
										sharenum:5	
								};
							this.list.push(obj);
							this.loadtext='上拉加载更多';
					},1000);
					
				}
		}
	}
</script>

<style>

</style>
