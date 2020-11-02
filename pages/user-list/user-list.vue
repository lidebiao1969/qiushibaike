<template>
	<view>
		
		<!-- tab列表 -->
		<roll-tab-bar
		:tabBars="navbars"	
		:tabIndex="tabIndex" 
		@tabtap="tabtap"
		scrollStyle="border-bottom:0;"
		scrollItemStyle="width:33%;">
		</roll-tab-bar> 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
				navbars:[
					{name:'互关',id:'huguan',num:20},
					{name:'关注',id:'guanzhu',num:50},
					{name:'最新',id:'zuixin',num:30}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e.index)
			if(e.index==0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			
			tabtap(index){this.tabIndex=index},
			//占位
			tt(){
				
			}
		}
	}
</script>

<style>

</style>
