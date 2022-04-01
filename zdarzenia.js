document.getElementById("Click").addEventListener("click",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Dbclick").addEventListener("dblclick",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
    console.log("jaj");
});

document.getElementById("Mouseout").addEventListener("mouseout",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Mouseup").addEventListener("mouseup",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Mousedown").addEventListener("mousedown",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Mouseover").addEventListener("mouseover",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Mousemove").addEventListener("mousemove",function(){
    if(this.className == "on")
    {
        this.className="off";
        this.value="off"
    }
    else
    {
        this.className="on";
        this.value="on"
    }
});

document.getElementById("Change").addEventListener("change",function(){
    if(this.className == "on")
    {
        this.className="off";
    }
    else
    {
        this.className="on";
    }
});

document.getElementById("Fokus").addEventListener("focus",function(){
    if(this.className == "on")
    {
        this.className="off";
    }
    else
    {
        this.className="on";
    }
});

document.getElementById("Blur").addEventListener("blur",function(){
    if(this.className == "on")
    {
        this.className="off";
    }
    else
    {
        this.className="on";
    }
});

document.getElementById("Sel").addEventListener("select",function(){
    if(this.className == "on")
    {
        this.className="off";
    }
    else
    {
        this.className="on";
    }
});