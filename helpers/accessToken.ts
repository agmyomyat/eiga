export function getAccessToken(){
	if(typeof window !== 'undefined') {
	return localStorage.getItem("EigaAccess")
	}else{return false}
}
export function setAccessToken(value:string){
	if(typeof window !== 'undefined') {
	return localStorage.setItem("EigaAccess",value)
}else{return false}
}