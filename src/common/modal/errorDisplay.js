import React  from 'react';
import createFragment from 'react-addons-create-fragment';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';





const ErrorDisplay = (props)=>{
  let container = null;
  let face = "";

  if(props.hasError){
    container =    (
                    <div className="panel panel-danger correct loading" style={{backgroundColor:'rgba(255,255,255,0.97)'}}>
                      <div className="panel-heading panel-heading-custom  ">{props.title}</div>
                      <div className="panel-body message" style={{color:'red'}}><i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i><br/>{props.details}</div>
                    </div>
                    );
  }

  return container;

};
ErrorDisplay.propTypes={
  hasError:PropTypes.bool,
  title:PropTypes.string,
  details:PropTypes.string
};
  export default ErrorDisplay;
