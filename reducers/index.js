import img1 from '../img/temp/1.png'
import img2 from '../img/temp/2.png'
import img3 from '../img/temp/3.jpg'

export default (state=0, action) => {
	switch( action.type ){
		case 'aaa':
			return {bigImg : img1}
			break;

		case 'bbb':
			return {bigImg : img2}
			break;

		case 'ccc':
			return {bigImg : img3}
			break;

		default:
			return {
				bigImg : img1,
				smallImgArr : [img1, img2, img3]
			}
	}
}