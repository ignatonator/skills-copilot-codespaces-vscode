function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var url = "skillsMember.php?member=" + member + "&skills=" + skills;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            skillsMemberResult(this);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
