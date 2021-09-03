export function getAccessToken(){
	if(typeof window !== 'undefined') {
	return localStorage.getItem("eg0192")
	}else{return false}
}
export function setAccessToken(value:string){
	if(typeof window !== 'undefined') {
	return localStorage.setItem("eg0192",value)
}else{return false}
}