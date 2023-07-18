function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    if (member.style.display === "none") {
        member.style.display = "block";
        memberSkills.style.display = "none";
    } else {
        member.style.display = "none";
        memberSkills.style.display = "block";
    }
}