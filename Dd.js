import React,{Component} from 'react';

class Dd extends Component{

	switchBigImg(_j){
		let _a = this.props._aa
		let _b = this.props._ab
		let _c = this.props._ac

		let arr = [_a, _b, _c]
		// console.log(arr)
		arr[_j]();
	}

	render(){
		let _imgArr = this.props._smallArr;

		return(
			<dd>
				<div className="smallImgList">
					<ul>{
						_imgArr.map((i,j)=>{
							return  <li key={j} onClick={this.switchBigImg.bind(this,j)} >
									    <img src={i} alt={j} />
									</li>
						})
					}</ul>
				</div>
			</dd>
		);
	}
}

export default Dd;