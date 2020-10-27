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
		methods: {
			go(index){
				console.log(index)
			}
		}
	}
</script>

<style>
	.page{
		margin: 0 20upx;
		}
	
	
</style>
