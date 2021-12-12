var pack_size = 0;


function add_item_to_pack(quantity, option){


    if (quantity.value<1){
        window.alert("הכנס ערך גדול מ-0")
    }


    if (+quantity.value + +pack_size > 5){
        window.alert("יותר מידי פריטים במארז")
    }

    else if (option.value == "crack pai"){

        let li = document.getElementById('list');
        for(let i=0; i<quantity.value; i++){
            if (pack_size<4){
                li.innerHTML+= option.value + " ,";
                pack_size ++;
            }
            else{
                li.innerHTML+= option.value ;
                pack_size ++;
            }
        }
    }

    else if (option.value == "קינוח פטל"){

        let li = document.getElementById('list')
        for(let i=0; i<quantity.value; i++){
            if (pack_size<4){
                li.innerHTML+= option.value + " ,";
                pack_size ++;
            }
            else{
                li.innerHTML+= option.value ;
                pack_size ++;
            }
        }
    }

    else if (option.value == "סנט הונורה קטן"){

        let li = document.getElementById('list')
        for(let i=0; i<quantity.value; i++){
            if (pack_size<4){
                li.innerHTML+= option.value + " ,";
                pack_size ++;
            }
            else{
                li.innerHTML+= option.value ;
                pack_size ++;
            }
        }
    }

    else if (option.value == "פאי אוכמניות קטן"){

        let li = document.getElementById('list')
        for(let i=0; i<quantity.value; i++){
            if (pack_size<4){
                li.innerHTML+= option.value + " ,";
                pack_size ++;
            }
            else{
                li.innerHTML+= option.value ;
                pack_size ++;
            }
            
        }
    }
}

function clear_list(){
    let li = document.getElementById('list');
    li.innerHTML = null;
    pack_size = 0;
}


function check_amount(quantity){
    if (quantity.value<1){
        window.alert("הכנס ערך גדול מ-0")
    }
}