function firstWord(s) {
  // your code here
	var words = s.split(' ');

	return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
