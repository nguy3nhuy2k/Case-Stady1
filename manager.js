
function setUp() {
    originlist=['aimo','aomua','bikich','dauthu','homcongduc','kiemchuyen','mahoa','nhaccu','nhanduc','sotroi'];
    chosenlist=[];
    rightanswerlist=[];
    round=0;
    iteration=[]
}

function turnOffNofication() {
    document.getElementById('nofication').innerHTML=''
}
function refresh() {
    document.getElementById("image").src = './images/'+chosen + ".jpg";
    turnOffNofication();
    document.getElementById('suggestion').innerHTML=''
    document.getElementById('answer').value=''
}

function choosenew() {
    i=Math.round(Math.random()*(originlist.length-1));
    chosen=originlist[i];
    originlist.splice(i,1);
    chosenlist.push(chosen);
    document.getElementById('serial').innerHTML = 'Câu số ' + ++round;
    refresh()

}
function start() {
    do {
        playername=prompt('Đăng ký tên người chơi:')
    } while (playername===null);
    setUp()
    document.getElementById('start').innerHTML = '';
    document.getElementById('serial').style = '';
    document.getElementById('image').style = '';
    document.getElementById('main').style = '';

    choosenew();
console.log(playername)
}
function check() {
    answer=change_alias(document.getElementById('answer').value);
    switch (answer) {
        case '':document.getElementById('nofication').innerHTML ='Bạn chưa nhập đáp án';break;
        case chosen:document.getElementById('nofication').innerHTML = "Chuẩn!";
            if(rightanswerlist.includes(chosen)===false){
                rightanswerlist.push(chosen);
                document.getElementById('scores').innerHTML=rightanswerlist.length;
                setTimeout(function () {
                    switch (rightanswerlist.length) {
                        case 1:document.getElementById('thongbao').innerHTML=alert(' Frist blood'); break;
                        case 2:document.getElementById('thongbao').innerHTML=alert(' Double kill');break;
                        case 3:document.getElementById('thongbao').innerHTML=alert(' Triper kill');break;
                        case 4:document.getElementById('thongbao').innerHTML=alert(' Quara kill');break;
                        case 5:document.getElementById('thongbao').innerHTML=alert(' PENTA KILLLLLL');break;
                        case 6:document.getElementById('thongbao').innerHTML=alert(' Hexxa kill');break;
                        case 7:document.getElementById('thongbao').innerHTML=alert(' Unbelievable');break;
                        case 9:document.getElementById('thongbao').innerHTML=alert('Thần thánh ');break;
                        case 8:document.getElementById('thongbao').innerHTML=alert(' Bạn đã trở thành huyền thoại!');break;
                        case 10:document.getElementById('thongbao').innerHTML=alert(' Yasuo 20gg');break
                    }
                },1000)
                if(rightanswerlist.length>9){
                    setTimeout(function () {
                        if(confirm('Bạn đã phá đảo ')){
                            nextlevel()
                        }
                    },1000)
                }
            }break;
        default:document.getElementById('nofication').innerHTML = "Không đúng, mời bạn thử lại!"

    }
}
function showTheChosen() {
    document.getElementById('nofication').innerHTML='Đáp án đúng là: '+chosen

}
function next() {
   switch (iteration.length===0) {
       case true:if (originlist.length>0){
           choosenew()
       }
       break;
       default:chosen=iteration[iteration.length-1];
           chosenlist.push(iteration.pop());
           document.getElementById('serial').innerHTML = 'Câu số ' + ++round;
           refresh()
   }
}


function previous() {
    if (chosenlist.length>1){
        iteration.push(chosenlist.pop());
        chosen=chosenlist[chosenlist.length-1];
        document.getElementById('serial').innerHTML = 'Câu số ' + --round
        refresh()
    }
}
function reset() {
    if(confirm('Vẫn sử dụng tên hiện tại?')){setUp();
        document.getElementById('scores').innerHTML=0;
        choosenew()}else {start()}
}
