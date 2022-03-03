////게임 캐릭터의 진행
var $hero = {
    name : "영웅",
    level : 1,
    hp : 100    //게임 캐릭터의 생명력
    
};
var $your_hp = $hero.hp;    //게임을 처음 오픈했을때 캐릭터의 최대 생명력을 저장한다.
console.log($your_hp);

var $cur_txt = document.querySelector(".cur_state");

//"이동"버튼 클릭시마다 -5 씩 생명력 감소
function move(){
    if($hero.hp <= 0){
        $cur_txt.textContent = "현재 나의 캐릭터는 죽었습니다.";
    }else{
        $hero.hp -= 5;
        console.log($hero.hp);
        $cur_txt.innerText = "현재 나의 캐릭터 생명력은 " + $hero.hp + "가(이) 되었습니다.";
        // $cur_txt.textContent = "현재 나의 캐릭터 생명력은 " + $hero.hp + "가(이) 되었습니다.";  //textContent도 가능
    };
};

//기존 최대 생명력의 값 초과하면? 안된다.
function add_hp(){
    $hero.hp += 10;
    if($hero.hp >= $your_hp){
        $hero.hp = $your_hp;
        $cur_txt.innerText = "현재 나의 캐릭터 생명력을 더이상 증가 시킬수 없습니다.";
    }else{
        $cur_txt.innerText = "현재 나의 캐릭터 생명력은 " + $hero.hp + "가(이) 되었습니다.";
    };
};
console.log($hero.hp);
