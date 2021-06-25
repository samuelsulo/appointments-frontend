export const getDateNow = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? '0' + ( date.getMonth() + 1 ) : ( date.getMonth() + 1 );
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + '-' + month + '-' + day;
}


export const getTimeNow = () => {
    let time = new Date();
    let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    return hours + ':' + minutes;
}