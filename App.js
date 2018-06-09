import React,{Component} from 'react';
import Dt from './Dt'
import Dd from './Dd'

import './css/reset.css'
import './css/base.css'
import './css/detail.css'

class App extends Component{

	dtMaskMoveFn(e, _MaskRef, _localImgRef){
		let _eL = e.pageX;
		let _eT = e.pageY;

		// 父容器距离浏览器的xy
		let _goodsPageX = _MaskRef.parentNode.offsetLeft;
		let _goodsPageY = _MaskRef.parentNode.offsetTop;

		_eL = _eL - _goodsPageX -85;
		_eT = _eT - _goodsPageY -85;

		if(_eL < 0){
			_eL = 0
		} else if (_eL > _MaskRef.parentNode.clientWidth - 170){
			_eL = _MaskRef.parentNode.clientWidth - 170                                          
		}

		if(_eT < 0){
			_eT = 0
		} else if (_eT > _MaskRef.parentNode.clientHeight - 170 ){
			_eT = _MaskRef.parentNode.clientHeight - 170
		}

		_MaskRef.style.left = _eL + 'px'
		_MaskRef.style.top = _eT + 'px'

		_localImgRef.style.left = -(_eL * 3) + 'px'
		_localImgRef.style.top = -(_eT * 3) + 'px'

	}

	render(){
		let a_a = this.props.action_a
		let a_b = this.props.action_b
		let a_c = this.props.action_c

		return(
			<div className="leftDiv" >
				<dl>
					<Dt 
						bigImg={this.props._bigImg}
						dtMove={this.dtMaskMoveFn.bind(this)}
					/>
					<Dd 
						_smallArr={this.props.smallImg}
						_aa={a_a}
						_ab={a_b}
						_ac={a_c}
					/>
				</dl>
			</div>
		);
	}
}

export default App;