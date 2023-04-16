/* Returns an array with this structure:
[
  {
    params: { id: 1, name: 'Eduardo' }
  },
  {
    params: { id: 2, name: 'Harvey' }
  }
]
*/
export function getCats() {
	// TODO: implement this function
	return null;
}

/* Returns an object with this structure:
{
	color: 'black and white',
	id: 1,
	name: 'Eduardo',
	nickname: 'Lalo',
	externalLinks: null
}
*/
export function getCatDetails(id: number) {
	// TODO: implement this function
	return null;
}

// Returns the picture with the specific filename in /cat-pics/,
// returns null if the file does not exist
export function getPicture(filename: string) {
	// TODO: fetch `${filename}.jpg` from /cat-pics/ and return
	return null;
}

// returns a single, randomly selected picture 
// of a cat from the catNames argument
export function getRandomPictureFor(catNames: string | Array<string>) {
	if (typeof catNames === 'string') {
		catNames = [catNames];
	}
	// TODO: select and return a .jpg file from the possible files in /cat-pics/
	return null;
}