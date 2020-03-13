
// ?Selects the first button from the document, adds an eventListener calls function friendSinger
let aButton = document.querySelector('button').addEventListener('click', friendSinger);

// ?A Function which creates creates a list divs with class of friend, each of which out 99 paragraphs of song.
function friendSinger() {
    //! Creates the list of friends-singers, which is used for looping through later.
    let friendsNameList = ["Jerry", "Henry", "Lisa", "Franny", "Emily"];

    //? The first part of the loop creates the div containers with a class friend, and the names textNodes to (the h3 headings).
    for (let x = 0; x < friendsNameList.length; x++) {
        let friend = document.createElement('div');
        let friendNameText = document.createTextNode(friendsNameList[x]);
        let friendNameContainer = document.createElement('h3');
        friend.className = 'friend';
        document.body.append(friend);
        friend.append(friendNameContainer);
        friendNameContainer.append(friendNameText);
        
        //? Inside loop runs each line of the song, creating a paragraph, and adding the song textNode to the paragrah.
        for (let y = 99; y > 0; y--) {
            //! Checks to see if it is the last line of the Song.
            if (y === 1) {
                let songLine = document.createElement('p');
                let songLineText = document.createTextNode(y + " lines of code in the file, " + y +
                    " lines of code; " + friendsNameList[x] +
                    " strikes one out, clears it all out, no more lines of code in the file");
                friend.append(songLine);
                songLine.append(songLineText);
            }
            //! Runs first 98 lines of the song.
            else {
                let songLine = document.createElement('p');
                let songLineText = document.createTextNode(y + " lines of code in the file, " + y +
                    " lines of code; " + friendsNameList[x] + " strikes one out, clears it all out, "
                    + (y - 1) + " lines of code in the file.");
                friend.append(songLine);
                songLine.append(songLineText);
            }
        }
    }
}
