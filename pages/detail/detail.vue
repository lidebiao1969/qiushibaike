<template>
	<view>
		<detailInfo :item="data"  :index="index"></detailInfo>
		
		
		
		<detail-mul-commentlist
			:commentList="commentList"
			@clickPraise="clickPraiseComment"
			@clickDelete="clickDeleteComment"
			@clickDeleteChild="clickDeleteCommentChild"
			@clickRecomment="clickRecomment"
			@clickRecommentChild="clickRecommentChild"
		></detail-mul-commentlist>
		
		<view class="view-conmment-send-bottom">
				<view class="textarea-comment" @click="clickComment">写评论…</view>
		</view>
					<!-- 输入框 -->
		<view v-if="isShow" class="comment">
			<view class="mask" @click="clickCancle"></view>
			<view class="comment-bottom">
				<textarea class="bottom-textarea" :cursor-spacing="setHight()" v-model="content" focus placeholder-style="color:#666666" :placeholder="placeholder" />
				<view class="bottom-view" id="bottomView">
					<view class="send-btn" @click="clickSend">发送</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import data from '@/data.js'; 
	/* import dateUtils from '@/common/utils/dateUtils.js'; */
	import dateFrom from '../../common/timeFrom.js'
	export default {
		data() {
			return {
				isShow:false,
				isVisible:true,
				ischild:0,
				index:0,
				content:"",
				data:{
						userpic:"../../static/HEAD/song.jpg",
						username:'哈哈',
						sex:0,  //0 男 1 女
						age:25,
						isguanzi:false,
						title:'我是标题',
						titlepic:'"/static/zzf/z1.png"',
						morepic:["/static/zzf/z1.png","/static/zzf/z2.png","/static/zzf/z3.png"],
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:20,
						day:"26天前",
						commentnum:5,
						goodnum:123
						
					},
				sindex:0,
				detailInfo: {},
				commentList: [],
				//评论组件相关
				placeholder: '请输入评论内容…',
				commentParam: {}
			}
		},
		onNavigationBarButtonTap(e) {
			
			if(e.index==0){
				console.log("分享！")
			}
		},
		onLoad(e) {
			this.init(JSON.parse(e.detailData))
			//console.log(e);
			
			this.getComment(); //获取评论列表
			//console.log(this.commentList)
			
		},
		onShow: function() {
			
		},
		methods: {
			setHight() {
				return uni.upx2px(80);
			},
			clickSend() {
				//传入数组中
				if (this.content !=''){
					this.commentParam.COMMENT = this.content;
					if(this.ischild==1){
					this.commentList[this.sindex].CHILD_ANWSER_LIST.push(this.commentParam);		
					}else{
					this.commentList.push(this.commentParam);
					}
				}
					//发送后清空数据
				this.content = '';
				this.isShow = false;
				this.ischild=0;
			},
			/* open() {
				this.isShow = true;
				console.log(this.note)
			}, */
			clickCancle() {
				this.isShow = false;
			},
			init(obj){
				//console.log(obj);
				this.detailInfo=obj;
				//console.log('this.detailInfo: \n')
				//console.log(JSON.stringify(this.detailInfo))
				uni.setNavigationBarTitle({
					title:obj.title,
					})
				/* this.data=obj; */
			},
			
			
			onConfirm(e){
				console.log(e)
			},
			
			 /** 获取评论详情
			 */
			getComment() {
				this.commentList = data.commentList;
				//console.log(JSON.stringify(this.commentList));
			},
			
			/**
			 * 格式化发布日期
			 * @param {Object} dateString
			 */
			formateDate(dateString) {
				dateString = parseInt(dateString) * 1000;
				let date = new Date(dateString);
				let formatStr = dateUtils.dateFormat('YYYY年mm月dd日 HH:MM:SS', date);
				return formatStr;
			},
			
			/**
			 * 回复问题
			 */
			clickComment() {
				/* JSON.stringify(this.detailInfo) */
			var now=new Date().getTime();
				//console.log(dateFrom(now));
				this.commentParam = {
					COMMENT_TIME: dateFrom(now),
					FIRSTNICKNAME: this.detailInfo.nickname,
					CHILD_ANWSER_LIST: [],
					IS_PRAISE: null,
					PRAISE_NUM: 0,
					CANDELETE: 1,
					HEADIMGURL: this.detailInfo.titlepic,
					SECONDNICKNAME: null
				};
				this.isShow=true
				/* this.$refs.detailComment.open(); */
			},
			/**
			 * 详情点赞
			 * @param {Object} isPraise
			 */
			clickPraise(isPraise) {
				let praiseParam = '1';
				let praiseNum = parseInt(this.detailInfo.PRAISE_NUM);
				switch (isPraise) {
					case '0':
						praiseParam = '1';
						praiseNum++;
						break;
					case '1':
						praiseParam = '0';
						praiseNum--;
						break;
				}
				this.detailInfo.IS_PRAISE = praiseParam;
				this.detailInfo.PRAISE_NUM = praiseNum--;
			},
			
			/**
			 *  查看图片大图
			 * @param {Object} images
			 * @param {Object} index
			 */
			cliclImage(images, index) {
				uni.previewImage({
					urls: images,
					current: index,
					longPressActions: {
						itemColor: '#12B368',
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			/**
			 * 删除详情
			 */
			clickDeleteDetail() {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
					}
				});
			},
			/**
			 * 点赞多级评论
			 * @param {Object} item
			 */
			clickPraiseComment(item) {
				//只能点赞不能取消
				if (item.IS_PRAISE == '1') {
					return;
				}
				item.IS_PRAISE = '1';
				item.PRAISE_NUM++;
			},
			/**
			 * 删除多级评论
			 * clickDelete(index)
			 */
			clickDeleteComment(index) {
				this.index=index;
			//console.log(JSON.stringify(this.commentList[index]));
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
					}
				});
			},
			/**
			 * 删除多级子评论\
			 * clickDeleteChild(index,indexChild)
			 */
			clickDeleteCommentChild(index,indexChild) {
				//console.log(JSON.stringify(this.commentList[index].CHILD_ANWSER_LIST[indexChild]))
				var arr=this.commentList[index].CHILD_ANWSER_LIST;
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: (res)=> {
						/* 调用接口删除 */
						/* this.commentList[index].CHILD_ANWSER_LIST.splice(indexChild,1); */
						
					}
				});
			},
			
			/**
			 * 回复 评论
			 * @param {Object} item
			 * clickRecomment(index)
			 */
			clickRecomment(index) {
			
			//	console.log('index')
				this.ischild=1;
				this.sindex=index;
				this.clickComment();
				this.placeholder = '回复' + this.commentList[index].FIRSTNICKNAME + ':';
				/* setTimeout(()=>{
				this.commentList[index].CHILD_ANWSER_LIST.push(this.commentParam);	
				},1000) */
			
				 
			},
			/**
			 * 回复评论的评论
			 * @param {Object} item
			 */
			clickRecommentChild(index,indexChild) {
				console.log('indexChild')
				//console.log(JSON.stringify(this.commentList[index].CHILD_ANWSER_LIST[indexChild]))
				this.commentParam.COMMENT = this.content;
				this.commentList[index].CHILD_ANWSER_LIST.push(this.commentParam);
				 this.isShow=true;
				
				
				// /* this.commentParam = {};
				// this.isShow=true;
				/* this.$refs.detailComment.open(); */
				/* this.placeholder = '回复' + item.FIRSTNICKNAME + ':'; */ 
			},
			/* *
			 * 删除单级评论
			 * */
			clickDeleteSig(item) {
				uni.showModal({
					title: '提示',
					content: '确定要删除评论吗？',
					confirmColor: '#12B368',
					success: function(res) {
						/* 调用接口删除 */
					}
				});
			},
			/**
			 * 点赞单级评论
			 */
			clickPraiseSig(item) {
				//只能点赞不能取消
				if (item.IS_PRAISE == '1') {
					return;
				}
				item.IS_PRAISE = '1';
				item.PRAISE_NUM++;
			},
			/**
			 * 发送评论
			 * @param {Object} result
			 */
			/* sendComment() {
				this.commentParam.COMMENT = result;
				this.commentList.push(this.commentParam);
			}, */
			
			//占位
			hh(){}
		}
	}
</script>

<style scoped>
	.comment {
		z-index: 2;
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
	}
	.mask {
		width: 100%;
		flex: 1;
		background: rgba(0, 0, 0, 0.3);
	}
	.mask-hidden {
		display: none;
	}
.comment-bottom {
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: white;
	position: absolute;
	bottom: 0;
	}
.bottom-textarea {
		margin:  0 auto;
		width: 92%;
		margin-top: 20rpx;
		height: 210rpx;
		border-bottom: 1px solid #f6f6f6;
	}
.bottom-view {
		margin:  0rpx 30rpx;
		display: flex;
		height: 80rpx;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		}
.send-btn {
			width: 100rpx;
			text-align: end;
			font-size: 30rpx;
			align-items: center;
			color: #d81e07;
		}
	

</style>
