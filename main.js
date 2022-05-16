let tienganh = ['apple', 'banana', 'orange'];
let tiengviet = ['táo', 'chuối', 'cam'];
function dich(){
    let input = document.getElementById('input').value;
    let kq = 'không tìm thấy';
    for(let i = 0; i < tienganh.length; i++){
        if(input == tienganh[i]){
            kq = tiengviet[i];
        }
    }
    document.write(kq);
}