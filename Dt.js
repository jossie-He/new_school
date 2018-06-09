import React,{Component} from 'react';

class Dt extends Component{

	bigImgMaskFn(e){
		let _bigImgMaskRef = this.refs.bigImgMaskRef;
		let _localImgDetailRef = this.refs.localImgDetailRef;

		this.props.dtMove(e, _bigImgMaskRef, _localImgDetailRef);
	}

	render(){
		let _img = this.props.bigImg;

		return(
			<dt onMouseMove={this.bigImgMaskFn.bind(this)} >
				<div className="bigImgMask" ref="bigImgMaskRef"></div>
				<img src={_img} alt={_img} />
				<i></i>
				<div id="localImgDetailId" className="localImgDetail">
					<img ref="localImgDetailRef" src={_img} alt={_img} />
				</div>
			</dt>
		);
	}
}

export default Dt;