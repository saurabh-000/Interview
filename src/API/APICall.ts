export const GETAPI=(url:string,cred=null)=>{
    let headers = new Headers();
    if(cred){
        headers.append("Authorization", cred);
    }
    let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
};

    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch((error) => console.error(error));
}