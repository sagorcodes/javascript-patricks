// Write a function. The name of this function will be bestFriend then the function will take an array as input parameter. That array will contain the names of all your friends. Now your task is to return the name of the friend whose name is the largest. In this case you should return the name ie the friend's name (string). 

function bestFriend(friendNames) {
    var longestName = "";
    
    for (var i = 0; i < friendNames.length; i++) {
      if (friendNames[i].length > longestName.length) {
        longestName = friendNames[i];
      }
    }
    
    return longestName;
  }
  
  var friends = ["Alice", "Bob", "Charlie", "David", "Emma"]; // Change this array with your own friend names
  
  var result = bestFriend(friends);
  
  console.log("Best friend's name:", result);
  