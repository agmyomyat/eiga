export function getAccessToken(){
	return localStorage.getItem("EigaAccess")
}
export function setAccessToken(value:string){
	return localStorage.setItem("EigaAccess",value)
}