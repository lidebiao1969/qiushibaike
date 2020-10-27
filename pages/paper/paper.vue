<template>
	<view class="page">
		<view v-for="(item,index) in list " :key="index" @click="go(index)" >
			<paper-list :list="item" ></paper-list>
		</view>
		<load-more loadtext="上拉加载更多"></load-more>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				list:[{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:123
				},
				{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				}]
			}
			
		},
		onPullDownRefresh() {
			this.getData();
		},
		methods: {
			go(index){
				console.log(index)
			},
			getData(){
				setTimeout(()=>{
				let arr=[{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称1111",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:123
				},
				{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称2222",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称3333",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称4444",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				},{
					titlepic:"../../static/HEAD/mm1.png",
					nickname:"昵称5555",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:12
				},{
					titlepic:"../../static/HEAD/mm2.png",
					nickname:"昵称6666",
					time:"13:27",
					context:"赵丽颖一句话打脸",
					badget:0
				}]	;
				this.list=arr;
				uni.stopPullDownRefresh();
				},2000);
				
				
			}
		}
	}
</script>

<style>
	.page{
		margin: 0 20upx;
		}
	
	
</style>
