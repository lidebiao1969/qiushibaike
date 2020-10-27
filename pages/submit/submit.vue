<template>
	<view>
		<uni-nav-bar :statusBar="true" rightText="发布" leftText="返回" leftIcon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc" @click="changelook">
				{{yinsi}}
				<view class="iconfont icon-arrow-down"></view>
			</view>
		</uni-nav-bar>
		<!-- //多行输入框 -->
		<!-- <view class="uni-textarea"> -->
		<textarea class="uni-textarea" v-model="text" placeholder="说一句话吧" />
		
		
		<!-- //上传多图 -->
		<multi-images @upload="upload"></multi-images>
		
		<!-- <uni-popup v-show="showpop" ref="popup" type="center">
			<view class="txt">
				<image src="../../static/pic.png" mode="widthFix"></image>
				<button type="primary" @click="showpopup">确定</button>
			</view>
			</uni-popup> -->
			<!-- 弹窗 -->
	<zi-popup></zi-popup>
		
	
	</view>
</template>

<script>
	
/* 	import permision from "@/common/permission.js" */
const yinsiList=['所有人可见', '仅自己可见']
	export default {
		
		
		data() {
			return {
				isget:false,
			/* showpop:true, */
				text:"",
				yinsi:"所有人可见",
				imgList:[],
				
			
			}
		},
		onBackPress() {
			if(this.text==""&& this.imgList.length<1){
				return
			} 			
			if(!this.isget){
				this.savecaogao();
				return true;
			}
				
			
		
		
		},
		methods: {
			/* showpopup(){
				this.showpop=false
			}, */
			 savecaogao(){
				 uni.showModal({
				 			content:"是否要保存？",
				 	  	cancelText:"不保存",
				 			comfirmText:"保存",
				 			success: (res) => {
				 				if(res.confirm){
				 					console.log("保存")
				 				}else{
				 					console.log("不保存")
				 				}
				 				this.isget=true,
				 				uni.navigateBack({
				 					delta:1
				 				})
				 			}
				 	  })
			 },
			back() {
			
					uni.navigateBack({
						delta:1
					})
					
				
			},
			submit(){
				console.log("submit")
			},
			changelook(){
				uni.showActionSheet({
				  itemList:yinsiList,
				    success:(res)=> {
				        this.yinsi=yinsiList[res.tapIndex]
				    }
				});
				
				
			},
		 upload(arr){
			 this.imgList=arr;
			console.log(this.imgList)
		 },
		
			//占位
			ss(){
				
			}
		}
	}
</script>

<style>
.u-f-ajc{
	display: flex;
	 flex: 1; 
	 justify-content: center;
	align-items: center; 
}
textarea{
	border: 1px solid;
}
.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		padding: 50rpx;
	}


</style>
