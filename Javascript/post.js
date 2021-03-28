function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = "Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }


    var edit = "Edit <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>"
    var save = "Save <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>"
function editsavetoggle(num){
    if(num === 0){
        document.getElementById("title-post").contentEditable=true;
        document.getElementById("paraText").contentEditable=true;
        document.getElementById("editsavebtn").setAttribute("onclick","editsavetoggle(1)");
        document.getElementById("editsavebtn").innerHTML = save;
    }
    if(num === 1){
        document.getElementById("title-post").contentEditable=false;
        document.getElementById("paraText").contentEditable=false;
        document.getElementById("editsavebtn").setAttribute("onclick","editsavetoggle(0)");
        document.getElementById("editsavebtn").innerHTML = edit;
    }
}