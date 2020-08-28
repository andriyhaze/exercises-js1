let tableMembers = ["John", "Mila", "Utha", "Mary", "Jack"]; //create array

tableMembers.splice(0, 0, "Somebody"); //insert somebody at the beginning
tableMembers.push("Else"); //add else at the end
tableMembers[3] = "Jane"; //add Jane at fourth position

console.log(tableMembers); //print content of the array
