var n, i1, i2, i3;
var profiles = [];
function saveData() {
  n = document.getElementById("name").value;
  i1 = document.getElementById("interest1").value;
  i2 = document.getElementById("interest2").value;
  i3 = document.getElementById("interest3").value;
  profiles.push({ Name: n, i1: i1, i2: i2, i3: i3 });
  console.log(profiles);
}
function findAFriend() {
  var lookingForAFriend = document.getElementById("inputBox").value;
  for (var i = 0; i < profiles.length; i++) {
    if (
      lookingForAFriend == profiles[i].i1 ||
      lookingForAFriend == profiles[i].i2 ||
      lookingForAFriend == profiles[i].i3
    ) {
      document.getElementById("option1").innerHTML =
        "Friend recommendation - " + profiles[i].Name;
      window.alert("Friend recommendation - " + profiles[i].Name);
      break;
    } else {
      document.getElementById("option1").innerHTML =
        "No suggestion found. Try with a different interest.";
      window.alert("No suggestion found. Try with a different interest.");
    }
  }
}
//to make it more functional and interactive/bigger
//first i need to create some data (as in bios of other people who have already signed up)
//click the submit button > function gets called which will extract all the info that was just entered
//that info will be converted into an object > obj will go into an array
//second step will be to "match" so the user has to enter keywords to get matched
//using the keyword > loop to match > finally*/
