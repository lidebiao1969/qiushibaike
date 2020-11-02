<<<<<<< .mine





































































































=======
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							},{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:0,  //0 男 1 女
								age:25,
								isguanzhu:true
							},
							{
								userpic:"../../static/HEAD/mm1.png",
								username:'哈哈',
								sex:1,  //0 男 1 女
								age:25,
								isguanzhu:false
							}
							],
					}
					
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onLoad() {
		 
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-uni.upx2px(100)
					//console.log("height : "+height)
					this.swiperHeight=height
				}
			})
		},
		methods: {
			
			tabtap(index){this.tabIndex=index},
			ontabchange(e) {
				    let index = e.target.current || e.detail.current;
				    this.tabIndex=index
					console.log("tabIndex : " +index)
				},
			loadmore(index){
				//console.log('index :'+index);
				
					if (this.friendList[index].loadtext!='上拉加载更多'){return;}
				this.friendList[index].loadtext='加载中';
					uni.showToast({
						icon: 'none',
						title: "加载中" 
					})
				setTimeout(()=>{
						let obj={
					userpic:"../../static/zzf/z1.png",
					username:"zzf",
					sex:1,
					age:20,
					isguanzi:true
					}
				this.friendList[index].list.push(obj);
				this.friendList[index].loadtext='上拉加载更多';
					},1000);
					
				}
		}
	}
</script>

<style >
.page{
	padding: 0 50upx;
}
.uni-tab-bar{
	 /* border: 1px solid red ; */
}
.list{
	 width: 100% !important; 
	/* border: 1px solid blue ; */
}
</style>
>>>>>>> .theirs
