//Defines an array labelled 'words' containing a selection of strings for sentence crafting.

const words = ["The Man", "The Woman", "The cat", "The dog", "The car", "The plane", "ran", "flew", "barked", "meowed", "laughed", "yelled", "ate","drove","loudly", "quietly", "quickly", "slowly", "into", "onto", "on", "inside of", "over", "a snake.", "Mount Everest.", "the road.", "a black hole.", "a building.", "the sun.", "a table.", "a pig's den."
];
let wordstory = []; //Defines the empty array 'story' in order to build one from the words array.

function addaWord(word) { //This will add a new word to the story array.
    wordstory.push(word);     //Adds the word to the end of the story array.
    document.getElementById("word-story").innerText = wordstory.join(" "); //This will find the element with the ID: word-story in the HTML     file, and will join all the elements in the story array into one string.
}

function finishStory() { //This will display an alert message which will include the contents of the wordstory array.
    alert("This is your story: " + wordstory.join(" ")); //Creates a sentence by joining elements in the wordstory array into one string.
}

//Creates a button for each word in the wordstory array 
function createButtons() { 
    const buttonContainer = document.getElementById("word-buttons");
    words.forEach(word => {
        let button = document.createElement("button");
        button.innerText = word;
        button.onclick = () => addaWord(word);
        buttonContainer.appendChild(button);
    })
}
document.addEventListener('DOMContentLoaded', createButtons);