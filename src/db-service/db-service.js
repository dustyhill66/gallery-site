import db from '../db.json'

export default class DBService {
	url = db.gallery

	getGalleryItems = () => {
		const response = this.url

		console.log(response)
		const result = response
		return result
	}
}
