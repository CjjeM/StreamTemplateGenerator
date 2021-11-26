function fontsize(sliderID, divID){
    var current_fontSize = document.getElementById(sliderID).value;
    var title = document.getElementById(divID);
    title.style.fontSize = current_fontSize+"px";
}

function fontstyle(selectObject, divID) {
    var current_fontStyle = selectObject.value;
    document.getElementById(divID).className = "font-"+current_fontStyle;
  }

function fontcolor(colorID, divID){
    var current_fontColor = document.getElementById(colorID).value;
    var title = document.getElementById(divID);
    title.style.color = current_fontColor;
}

function dayfontstyle(selectObject, className){
    var current_fontStyle = selectObject.value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].className = "day "+"font-"+current_fontStyle;
    }
}

function multifontcolor(selectObject, className){
    var current_fontColor = selectObject.value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].style.color = current_fontColor;
    }
}

function multibgcolor(selectObject, className){
    var current_bgColor = selectObject.value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].style.backgroundColor = current_bgColor;
    }
}

function multifontsize(sliderID, className){
    var current_fontSize = document.getElementById(sliderID).value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].style.fontSize = current_fontSize+"px";
    }
}

function descfontstyle(selectObject, className){
    var current_fontStyle = selectObject.value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].className = "form-control StreamDesc Streambg "+"font-"+current_fontStyle;
    }
}

function optionalfontstyle(selectObject, className){
    var current_fontStyle = selectObject.value;
    var multi_list = document.getElementsByClassName(className);

    for(var i = (multi_list.length - 1); i >= 0; i--){
        multi_list[i].className = "form-control OptionalDesc Optionalbg "+"font-"+current_fontStyle;
    }
}

function readURL(event) {
    var getImagePath = URL.createObjectURL(event.target.files[0]);
    var divbg = document.getElementById('main-template');
    divbg.style.backgroundImage = "url(" + getImagePath + ")";
    divbg.style.backgroundSize = "cover";

    var current_image = document.getElementById('image_url');
    current_image.value = "url(" + getImagePath + ")";
  }


function showoptional(currentval) {
    var multi_list = document.getElementsByClassName('optional-text');

    if (currentval.checked) {
        for(var i = (multi_list.length - 1); i >= 0; i--){
            multi_list[i].style.display = "block";
        }
    }
    else {
        for(var i = (multi_list.length - 1); i >= 0; i--){
            multi_list[i].style.display = "none";
        }
    };
}

function saveTemplate() {
    html2canvas(document.querySelector("#capture-template"), {scale: 1}).then((canvas) => {
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      var a = document.createElement("a");
      a.href = image;
      a.download = "Stream Template.png";
      a.click();
    });
  }
