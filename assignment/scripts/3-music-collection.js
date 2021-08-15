console.log('***** Music Collection *****')
var collection = [];

function addToCollection(title, artist, yearPublished, tracks = []) {
    let a = {
        title,
        artist,
        yearPublished,
        tracks
    } // end a
    collection.push(a)
    return a
} // end attToCollection

console.log(addToCollection('Signed to the streets 2', 'Lil Durk', 2014));
console.log(addToCollection('Scorpion', 'Drake', 2018, [{ name: 'Blue Tint', duration: '2:43' }, { name: 'Mob ties', duration: '3:26' }]));
console.log(addToCollection('beerbongs and bentleys', 'Post Malone', 2018));
console.log(addToCollection('Strictly 4 my fans', 'G herbo', 2016));
console.log(addToCollection('The Voice Deluxe', 'Lil Durk', 2021));
console.log(addToCollection('Top', 'Youngboy ', 2020));

console.log(collection);

console.log('~~Show Collection~~')
function showCollection(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished)
        array[i].tracks.forEach((track, i) => {
            console.log(`${i + 1}. ${track.name}: ${track.duration}`)
        }) // end  forEach - show name and duration
    } // end for loop
    console.log('Number of Albums in my Collection:', array.length);
} // end showCollection
showCollection(collection);

function findByArtist(artist) {
    let artistAlbums = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            artistAlbums.push(collection[i])
        } // end .push if
    } //end for loop
    return artistAlbums
}; // end findByArtist

const findByYear = (yearPublished) => {
    let albumsByYear = [];
    collection.forEach(album => {
        if (yearPublished === album.yearPublished) {
            albumsByYear.push(album)
        } // end .push if
    }) // end forEach
    return albumsByYear
} // end findByYear

const findByTitle = (title) => {
    let albumsByTitle = [];
    collection.forEach(album => {
        if (title === album.title) {
            albumsByTitle.push(album)
        } //end if .push
    }) // end forEach
    return albumsByTitle
} // end findByTitle

// Stretch Goals
const search = (array, object) => {
    let results = [];
    array.forEach(album => {
        if (object.artist === album.artist || object.yearPublished === album.yearPublished || object.title === album.title) {
            results.push(album)
        } else {
            album.tracks.forEach(track => {
                if (object.trackName === track.name) {
                    results.push(album)
                } // end trackName .push
            }) // end forEach trackName
        } // end else
    }) // end forEach album
    return results
} // end search
