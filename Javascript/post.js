/*
    For adding comments
This function takes the value from textarea with id that was
recieved from function call then uses innerhtml to update the
comments in div with id 'addEventNames', adds comment above the
last comment

*/
function addComments(id){
    comment = "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"
    if(id.value!==""){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML = '<p>'+comment+" "+addEventName+'</p>' + document.getElementById('addEventNames').innerHTML;          
    a.value=a.defaultValue;}
}
var numberOfClicks=0;

/* 
    For adding like to post 
This function takes the number of clicks as variable to set number
of likes on post, for one single like it says "1 person likes this"
when button is pressed more than once it will say "X people have liked this"

*/

function postLiked(){
    var like = "<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>"
    document.getElementById("likeBlog").innerHTML = like +" "+ "Liked!";
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


/*
    Toggle Between Edit/Save Post
This function switches the button between edit and save mode by
taking the number from function and changing attribute content editable
according to that.
*/
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