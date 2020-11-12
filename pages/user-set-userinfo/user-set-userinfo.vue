<template>
	<view  class="page">
		<block v-for="(item,index) in usersetinfo" :key="index">
			<view class="u-f u-f-btn user-set-info u-margin-h-20upx">
				<view >{{item.name}}</view>
				<view class="user-head u-f" @tap="changeinfo(item)">
					<view v-if="item.type=='txt'"> {{item.content}}</view>
					<image v-if="item.type=='img'"  :src="headpic" mode="aspectFill" lazy-load></image> 
					<text class="qfont icon-fatie"></text>
				</view>
			</view>
		</block>
		
		<button type="primary" class="user-set-btn " :disabled="disabled"
		  :class="{'user-set-btn-disable':disabled}"  
		:loading="loading"
		 @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled:false,
				loading:false,
				headpic:"../../static/HEAD/mvhai.png",
				usersetinfo:[
					{type:"img" ,name:"头像" ,headpic:"../../static/HEAD/mvhai.png"  },
					{type:"txt" ,name:"昵称" ,content:"哈哈"  },
					{type:"txt" ,name:"性别" ,content:"不限"  },
					{type:"txt" ,name:"生日" ,content:"2019-03-18"  },
					{type:"txt" ,name:"情感" ,content:"已婚"  },
					{type:"txt" ,name:"职业" ,content:"IT"  },
					{type:"txt" ,name:"家乡" ,content:"杭州"  }
				]
			}
		},
		methods: {
			
			changeinfo(item){
				//console.log(JSON.stringify(item))
				if(item.type=='img')
				{	uni.chooseImage({
						count: 1, //默认9
						 sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
						    //从相册选择//可以指定是原图还是压缩图，默认二者都有
							success: (res)=> {
							this.headpic=res.tempFilePaths[0]
							//console.log(JSON.stringify(res.tempFilePaths));
							console.log(this.headpic)
						}
					});
					uni.request({
						method:"GET",
						 url: this.headpic,
						 responseType: 'blob',
						 success: (res) => {
						 	let blob = res.data;
							console.log(res)
						 }
					})
					
					
					
					
				}
			},
			submit(){
				this.loading=true;
				if(!this.check()){this.loading=false;return};
					setTimeout(()=>{
						uni.showToast({
						title:'提交服务器',
						icon:"none",
					})
					this.loading=false;
					
					},2000)
			}
		}
	}
</script>

<style>
	.page{
		padding: 20upx;
	}
.user-set-btn{
	background: #ffe933;
	width: 100%;
	color: black;
	border-radius: 20upx;
}
.user-set-btn-disable{
	background: #eeeeee !important;
	color: #BEBEBE!important;
}
/* ---------------------------- */
.user-set-info{
	margin-bottom: 20upx;
	padding-bottom: 10upx;
	border-bottom: 1px solid #eeeeee;
}
.user-set-info>view:first-child{
	color: #9B9B9B;
}

.user-head>image{
	width:100upx;
	height: 120upx;
	border-radius: 100%;
}
.user-head>image{
	width:60upx;
	height: 90upx;
	margin-right: 20upx;
}
.user-head>text{
	line-height: 100upx;
}
.user-head>view{
		margin-right: 20upx;
		line-height: 100upx;
}
</style>
