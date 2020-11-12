const gettime={
	getChatTime(v1,v2){
		v1=v1.toString().length<13?v1*1000:v1;
		v2=v2.toString().length<13?v2*1000:v1;
		if(((parseInt(v1)-parseInt(v2))/1000)>300){
			return this.gettime(v1);
		}
	},
	
	gettime(shorttime){
		
		shorttime=shorttime.toString().length<13?shorttime*1000:shorttime;
		let now= (new Date()).getTime();
		let cha=(now-parseInt(shorttime))/1000
		if(cha<43200){
			
		}
		
		
	}
	
	
	
}