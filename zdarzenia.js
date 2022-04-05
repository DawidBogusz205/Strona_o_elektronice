function default_change(element){
    if(element.className == "on")
    {
        element.className="off";
        element.value="off"
    }
    else
    {
        element.className="on";
        element.value="on"
    }
}

function default_change_only_class(element){
    if(element.className == "on")
    {
        element.className="off";
    }
    else
    {
        element.className="on";
    }
}

document.getElementById("Click").addEventListener("click",function(){
    default_change(this);
});

document.getElementById("Dbclick").addEventListener("dblclick",function(){
    default_change(this);
});

document.getElementById("Mouseout").addEventListener("mouseout",function(){
    default_change(this);
});

document.getElementById("Mouseup").addEventListener("mouseup",function(){
    default_change(this);
});

document.getElementById("Mousedown").addEventListener("mousedown",function(){
    default_change(this);
});

document.getElementById("Mouseover").addEventListener("mouseover",function(){
    default_change(this);
});

document.getElementById("Mousemove").addEventListener("mousemove",function(){
    default_change(this);
});

document.getElementById("Change").addEventListener("change",function(){
    default_change_only_class(this);
});

document.getElementById("Fokus").addEventListener("focus",function(){
    default_change_only_class(this);
});

document.getElementById("Blur").addEventListener("blur",function(){
    default_change_only_class(this);
});

document.getElementById("Sel").addEventListener("select",function(){
    default_change_only_class(this);
});