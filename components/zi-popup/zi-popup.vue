<template>
	<view>
		<!-- 弹窗 -->
		<uni-popup v-show="showpop" ref="popup" type="center">
			<view class="txt">
				<image src="../../static/pic.png" mode="widthFix"></image>
				<button type="primary" @click="showpopup">确定</button>
			</view>
			</uni-popup>
			<!-- 弹窗结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showpop:true,
			};
		},
		mounted() {
		//	this.$nextTick(function () {
			    // Code that will run only after the entire view has been rendered
			  this.$refs.popup.open()  
			 // })
			
		},
		methods:{
			showpopup(){
				this.showpop=false
			},
		}
	}
</script>

<style>

</style>
