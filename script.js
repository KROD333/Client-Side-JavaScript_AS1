//Defines an array labelled 'words' containing a selection of strings for sentence crafting.

const words = ["The Man", "The Woman", "The cat", "The dog", "The car", "The plane", "ran", "flew", "barked", "meowed", "laughed", "yelled", "ate","drove","loudly", "quietly", "quickly", "slowly", "into", "onto", "on", "inside of", "over", "a snake.", "Mount Everest.", "the road.", "a black hole.", "a building.", "the sun.", "a table.", "pig's den."
];
let story = []; //Defines the empty array 'story' in order to build one from the words array.

function addaWord(word) { //This will add a new word to the story array.
    story.push(word);     //Adds the word to the end of the story array.
    document.getElementById("word-story").innerText = wordstory.join(" "); //This will find the element with the ID: word-story in the HTML     file, and will join all the elements in the story array into one string.
}

