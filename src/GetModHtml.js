async function GetModHtml(url) {
    const response = await fetch(window.location.protocol + '//' + window.location.host +'/'+url, {method: 'GET'});
    const data = await response.text();
    return data;
}



export default GetModHtml;