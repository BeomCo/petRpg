let $myPet = {
    img : "./img/" + "info.png",
    hp : 100,
    atk : Math.floor(Math.random() * 50)+ 50,
    level : 1,
    name : "JIN"
};

let $info_date = document.querySelector(".info_date");

setInterval(function(){
    let $today = new Date(); 
    $time = $today
}, 1000);


setInterval(function(){
    $info_date.textContent = $time.toLocaleTimeString();
    

}, 1000)

// const $gameStart = document.querySelector("#gameStart");
// const $inGame = document.querySelector("#inGame");

// $gameStart.addEventListener('click', () => {
//     document.querySelector("#mainMenu").setAttribute("class", "unShow");
//     $createPet.setAttribute("class", "show");
// });

// const $createPet = document.querySelector("#createPet");
// const $createName = document.querySelector("#createName");
// const $createPetStart = document.querySelector("#createStart");

// $createPetStart.addEventListener('click', () => {
//     let $createNameIn = $createName.value;
//     document.querySelector("#createPet").setAttribute("class", "unShow");
//     $inGame.setAttribute("class", "show");
    
//     $myPet.name = $createNameIn;
// });

const $info_name = document.querySelector(".info_name");
const $info_hp = document.querySelector(".info_hp");
const $info_lv = document.querySelector(".info_lv");
const $info_profile = document.querySelector(".info_profile");


let insert_info = function(name, level, atk, hp, img){
    $info_name.textContent = `NAME : ${name}`;
    $info_hp.textContent = `HP : ${hp}`;
    $info_lv.textContent = `LEVEL : ${level}`;
    $info_profile.setAttribute("src", `${img}`);
//     $petImg.setAttribute("src", `./img/${img}` );
//     $startBtn.setAttribute("style", "display: block;");
}
//펫정보 불러오기
petImport();



const $atk = Math.floor(Math.random() * 50)+ 50;
console.log($atk);



let $monster = {
    hp : Math.floor(Math.random() * 100)+ 150,
    atk : Math.floor(Math.random() * 16)+ 5,
}
let $myPet_hp = $myPet.hp;

const $petBtn = document.querySelector("#pet_btn");
const $petInfo = document.querySelector(".pet_info");
const $petImg = document.querySelector(".pet_img");
const $startBtn = document.querySelector(".startBtn");
const $movePetBtn = document.querySelector(".movePetBtn");
const $atkPetBtn = document.querySelector(".atkPetBtn");
const $healPetBtn = document.querySelector(".healPetBtn");
const $runPetBtn = document.querySelector(".runPetBtn");
const $monLog = document.querySelector(".monLog");
const $petLog = document.querySelector(".petLog");
const $interact_console = document.querySelector("#interact_console");
const $move_console = document.querySelector("#move_console");

// $petBtn.onclick = petImport;

// function pet(type, name, address, img){
//     $petInfo.textContent = `이름은 ${name} 종은 ${type}, 사는 지역은 ${address}`;
//     $petImg.setAttribute("src", `./img/${img}` );
//     $startBtn.setAttribute("style", "display: block;");
//     $petBtn.remove();
// }

function start(){
    $startBtn.setAttribute("style", "display: none;");
    $movePetBtn.setAttribute("style", "display: block;");
    $petLog.setAttribute("style", "display: block;");
}

const $pet_move_left = document.querySelector(".move_left");
const $pet_move_right = document.querySelector(".move_right");
let $event_pet_img = document.querySelector("#event_explorer img");

let $event_message = document.querySelector(".event_message");

// function movingChk(){
    
//     let movingChk = $event_pet_img.classList.contains('moving');
// }


// $pet_move_right.addEventListener('click', function(){
//     movingChk = $event_pet_img.classList.contains('moving');
//     if($myPet_hp > 1 && movingChk == false){
//         moveRight();
//         movePet();
//         $event_pet_img.classList.add("moving");

//     }
//     console.log(movingChk);
// });
// $pet_move_left.addEventListener('click', function(){
//     movingChk = $event_pet_img.classList.contains('moving');
//     if($myPet_hp > 1 && movingChk == false){
//         moveLeft();
//         movePet();
//         $event_pet_img.classList.add("moving");
//     }

// });

$distance = 0;

function moveRight(){
    $distance += 80;
    setTimeout(function(){
        $event_pet_img.classList.remove("moving");
    }, 400);
    $event_pet_img.setAttribute("src", "./img/right_move.png")
    $event_pet_img.style.marginLeft = `${$distance}px`;

    setTimeout(function(){
        $event_pet_img.setAttribute("src", "./img/right_normal.png")
    }, 300);
};
function moveLeft(){

    $distance -= 80;
    setTimeout(function(){
        $event_pet_img.classList.remove("moving");
    }, 400);
    $event_pet_img.setAttribute("src", "./img/left_move.png")
    $event_pet_img.style.marginLeft = `${$distance}px`;

    setTimeout(function(){
        $event_pet_img.setAttribute("src", "./img/left_normal.png")
    }, 300);
};

function movePet(){
    $monsterHunt = Math.floor(Math.random() * 10);
    console.log($monster);
    if($myPet_hp <= 1){
        $event_message.textContent= `${$myPet.name} 의 생명력이 모두 소진되었습니다.`; 
    }else{
            $myPet_hp -= 1;
            $event_message.textContent= `현재 ${$myPet.name} 의 생명력은 ${$myPet_hp}가(이) 되었습니다.`
            $info_hp.textContent = `HP : ${$myPet_hp}`; 
    }
    if($monsterHunt < 1){
        $move_console.setAttribute("style", "display: none;");
        $atkPetBtn.setAttribute("style", "display: inline;");
        $healPetBtn.setAttribute("style", "display: inline;");
        $runPetBtn.setAttribute("style", "display: inline;");
        $monLog.setAttribute("style", "display: inline-block;");
        $monLog.textContent = `몬스터 체력 : ${$monster_hp}`;
        $event_message.textContent= `몬스터 출현!!!`;
    }
};

let $monster_hp = $monster.hp;


function monAtk(){
    $atkDam = Math.floor(Math.random() * 50)+ 50
    $petLog.textContent= `공격 성공! ${$atkDam} 의 데미지를 입혔습니다.`; 
    $monster_hp -= $atkDam;
    $monLog.textContent = `몬스터 체력 : ${$monster_hp}`;
    if($monster_hp <= 0){
        $petLog.textContent= `몬스터 죽음`;
        returnMove();
        $monster_hp = 200;
    };
}

function returnMove(){
    $movePetBtn.setAttribute("style", "display: block;");
    $atkPetBtn.setAttribute("style", "display: none;");
    $healPetBtn.setAttribute("style", "display: none;");
    $runPetBtn.setAttribute("style", "display: none;");
    $monLog.setAttribute("style", "display: none;");
}



function add_hp(){
    $myPet_hp += Math.floor(Math.random() * 41) + 20;
    if($hero.hp >= $your_hp){
        $hero.hp = $your_hp
        console.log($myPet_hp);
        $petLog.textContent= `당신의 캐릭터는 이미 최대치의 생명력을 가지고 있습니다.`; 
    }else{
            console.log($myPet_hp);
            $petLog.textContent= `현재 나의 캐릭터 생명력은 ${$myPet_hp}가(이) 되었습니다.` 
    }
}

function monRun(){
    $monRunPP = Math.floor(Math.random() * 3);
    if($monRunPP >= 2){
        $petLog.textContent= `도망에 성공 했지만 피해를 입 었습니다.`
    }else{

    }
}


function petImport(){
    insert_info($myPet.name, $myPet.level, $myPet.atk, $myPet.hp, $myPet.img);
    // monAtk($monster_hp, $monster.atk);
}

