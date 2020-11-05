<template>
	<view>
		<detailInfo :item="data"  :index="index"></detailInfo>
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVisible:true,
				data:{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:0,  //0 男 1 女
						age:25,
						isguanzi:false,
						title:'我是标题',
						titlepic:'"/static/zzf/z1.png"',
						morepic:["/static/zzf/z2.png"],
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						day:"26天前",
						commentnum:5,
						goodnum:123
						
					},
				index:0
			}
		},
		onNavigationBarButtonTap(e) {
			
			if(e.index==0){
				console.log("分享！")
			}
		},
		onLoad(e) {
			this.init(JSON.parse(e.detailData))
			
		},
		methods: {
			init(obj){
				console.log(obj);
				uni.setNavigationBarTitle({
					title:obj.title,
					})
				/* this.data=obj; */
			},
			
			
			onConfirm(e){
				console.log(e)
			},
			//占位
			hh(){}
		}
	}
</script>

<style>

</style>
