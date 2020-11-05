<template>
	<view class="page">
		
	
		<scroll-view  :scroll-top="scrollTop" scroll-y="true" 
				:scroll-into-view="scrollinto" 
				:style="{height:swiperHeight+'px'}"
				@scroll="scroll">
				<block  v-for="(item,index) in list" :key="index">
					<user-chat-com :item="item" :index="index"></user-chat-com>
				</block>
		 	</scroll-view>
		
 
		 
		
		<!-- 输入框 -->
	<user-chat-bottom @submit="submit"></user-chat-bottom>
		
	</view>
</template>

<script>
	import dateutil from "../../common/util.js"
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
		this.$nextTick(function(){
			this.scrollinto='ss'+this.list.length; 
			console.log(this.scrollinto)
		})
				 
			
			   
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
					time:"1604376672",
					id:'ss5'
				},{
					isme:false,
					userpic:"../../static/HEAD/mm2.png",
					
					type:"img",//img
					imgsrc:"../../static/HEAD/man.png",
					time:"1604321072",
					id:'ss6'
				}];
				
				var arr=list;
				arr.forEach((v,i)=>{
					//v.time=this.getLocalTime(v.time);
					var a=dateutil.dateUtils.timestampToTime(v.time);
					
					v.time=dateutil.dateUtils.format(a);
					
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
					time:'',
					id:''
			}
			//obj.time=this.getLocalTime(obj.time)
			obj.time=new Date().getTime();
			var a=dateutil.dateUtils.timestampToTime(obj.time);
			obj.time=dateutil.dateUtils.format(a);
			
			obj.id='ss'+(this.list.length +1);
			 obj.content=t;
			// console.log(JSON.stringify(obj))
			this.list.push(obj);
			this.$nextTick(function(){
			this.scrollinto='ss'+(this.list.length);
			//console.log(this.scrollinto)
			})
			
			
			}
		}
	}
</script>

<style>
	.page{
		padding:20upx;
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
