import React  from 'react';
import createFragment from 'react-addons-create-fragment';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as baseActions from '../../actions/baseActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';





const Modal = (props)=>{
  if(props.loading){
  return      (
                    <div className="panel panel-default  loading" style={{backgroundColor:'rgba(255,255,255,0.97)'}}>
                      <div className="panel-heading panel-heading-custom  ">Loading</div>
                      <div className="panel-body message"><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span className="sr-only">Loading...</span></div>
                    </div>
                    );
  }else if(props.showModal){
    return (
                    <div className="panel panel-default loading" style={{backgroundColor:'rgba(255,255,255,0.97)'}}>
                      <div className="panel-heading panel-heading-custom  ">{props.title}</div>
                      <div className="panel-body message">{props.details}</div>
                    </div>
                    );
  }else{
    return (<div>Modal Not Loaded</div>);
  }
  

};
Modal.propTypes={
  loading:PropTypes.bool,
  details:PropTypes.string,
  title:PropTypes.string,
  showModal:PropTypes.bool
};
  export default Modal;
