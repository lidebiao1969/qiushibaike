<template>
	<view class="page">
		
		<scroll-view  :scroll-top="scrollTop" scroll-y="true" 
				:scroll-into-view="scrollinto" 
				:style="{height:swiperHeight+'px'}"
				@scroll="scroll">
				<block  v-for="(item,index) in list" :key="index">
					<view :id="item.id" class="user-chat-list-time">{{item.id}} </view> 
					<view class="user-chat-list" :class="{'user-chat-me':item.isme}">
						  <image :src="item.userpic" mode="widthFix" lazy-load></image> 
						<view class="user-chat-list-body">
							 <image  v-if="item.type=='img'" :src="item.imgsrc" mode="aspectFit"></image> 
							 <text v-if="item.type=='text'">{{item.content}}</text> 
						</view>
						
					</view>
				</block>
		 	</scroll-view>
		
 
		 
		
		<!-- 输入框 -->
	<user-chat-bottom @submit="submit"></user-chat-bottom>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				scrollTop:0,
				swiperHeight:'',
				text:"",
				list:[],
				scrollinto:"",
				old: {
					scrollTop: 0
				}
			}
		},
		
		onLoad() {
			// this.timeStamp();
			this.loadData();
		
				this.scrollinto='ss'+this.list.length;  
			
			   
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-uni.upx2px(100)
					//console.log("height : "+height)
					this.swiperHeight=height
				}
			})
		},
		/* onReady() {
			this.scrollinto='ss'+(this.list.length-1);
		},
		onShow() {
			this.scrollinto='ss'+(this.list.length-1);
		}, */
		
		
		methods: {
			 scroll(e) {
			 //	console.log(e.detail.scrollTop) 
				this.old.scrollTop = e.detail.scrollTop
			}, 
		//	timeStamp(){
				
				// 第一种：获取的时间戳是把毫秒改成000显示，第二种和第三种是获取了当前毫秒的时间戳。
				// var timestamp1 = Date.parse(new Date());
				// var timestamp2 = (new Date()).valueOf();
				// var timestamp3 = new Date().getTime();
				// console.log("timestamp1:"+timestamp1);
				// console.log("timestamp2:"+timestamp2);
				// console.log("timestamp3:"+timestamp3);
				// var oldTime = (new Date("2015/06/23 18:22:27.123")).getTime();///1000
				// //getTime()返回数值的单位是毫秒。
				// console.log("oldTime:"+oldTime);
				// var date = new Date(1604312046000);
				// console.log(date.toLocaleDateString())
				// console.log(date.getHours());
				// console.log(date.getMinutes());
				// console.log(date.getSeconds());
				
				
				
			// 	console.log(getLocalTime(1604312046));
				
			// },
		getLocalTime(nS) {
			  // return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '); //秒设为0
				  return new Date(parseInt(nS) * 1000).toLocaleString();  
			},
			loadData(){
				let list=[{
					isme:true,
					userpic:"../../static/HEAD/mm1.png",
					content:"随便喝",
					type:"text",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1576762712",
					id:'ss1'
				},{
					isme:false,
					userpic:"../../static/HEAD/mm2.png",
					type:"img",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1579441112",
					id:'ss2'
				},{
					isme:true,
					userpic:"../../static/HEAD/mm1.png",
					content:"随便喝3333",
					type:"text",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1584592712",
					id:'ss3'
				},{
					isme:false,
					userpic:"../../static/HEAD/mm2.png",
					type:"img",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1584592812",
					id:'ss4'
				},{
					isme:true,
					userpic:"../../static/HEAD/mm1.png",
					content:"随便喝3333",
					type:"text",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1584592912",
					id:'ss5'
				},{
					isme:false,
					userpic:"../../static/HEAD/mm2.png",
					
					type:"img",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1584593712",
					id:'ss6'
				}];
				
				var arr=list;
				arr.forEach((v,i)=>{
					v.time=this.getLocalTime(v.time);
					
				})
				this.list=arr;
				
			},
		submit(t){
		//	console.log(t) 
			let obj={
					isme:true,
					userpic:"../../static/HEAD/mm1.png",
					content:"随便喝88",
					type:"text",//img
					time:"1604315271",
					id:''
			}
			obj.time=this.getLocalTime(obj.time)
			obj.id='ss'+(this.list.length +1);
			 obj.content=t;
			// console.log(JSON.stringify(obj))
			this.list.push(obj);
			this.$nextTick(function(){
			this.scrollinto='ss'+(this.list.length);
			console.log(this.scrollinto)
			})
			
			
			}
		}
	}
</script>

<style>
	.page{
		padding:20upx;
	}
	
.user-chat-list-time{
		padding-top: 30upx ;
		font-size: 25upx;
		color: #333333;
		text-align: center;
	}
.user-chat-list{
	display: flex;
	margin: 20upx 0;
	
	
}

.user-chat-list>image{
	width: 100upx;
	height: 100upx;
	flex-shrink: 0;
	margin-right: 30upx;
	border-radius: 100%;
	
}
.user-chat-list-body{
	background: #F4F4F4;
	padding: 25upx;
	flex: 1;
	height: 100upx;	
	border-radius: 20upx;
	position: relative;
	margin-right: 120upx;
	display: flex;
	justify-content:flex-start;
}

.user-chat-list-body>image{
	width: 100upx;
	height: 100upx;
}


.user-chat-list-body:after{
	position: absolute;
	left: -30upx;
	right: 0;
	top:30upx;
	content: '';
	width: 0;
	height: 0;
	border: 16upx solid #F4F4F4;
	border-color: transparent #F4F4F4 transparent transparent;
}
.user-chat-me{
	display: flex;
	flex-direction: row-reverse;
}
.user-chat-me>image{
	/* width: 100upx; */
	height: 100upx;
	flex-shrink: 0;
	margin-right: 30upx;
	border-radius: 100%;
	
}
.user-chat-me .user-chat-list-body{
	margin-right: 20upx;
	margin-left: 120upx;
	justify-content:flex-end;
}
.user-chat-me .user-chat-list-body:after{
	left: auto;
	right: -30upx;
	border-color: transparent transparent transparent #F4F4F4;
	
}



/* ----------------------- */
/* .list{
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	height: 700upx;
	background-color: #09BB07;
}
.color-blue{
	
	width: 200upx;
	height: 200upx;
	background-color: blue;
}

.color-pink{
	
	width: 200upx;
	height: 200upx;
	background-color: pink;
}
.color-red{
	
	width: 200upx;
	height: 200upx;
	background-color: red;
} */
</style>
