/* eslint-disable no-console */
import React  from 'react';
import createFragment from 'react-addons-create-fragment';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as baseActions from '../../actions/baseActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import Modal from '../../common/modal/modal';
import ErrorDisplay from '../../common/modal/errorDisplay';





class HomePage extends React.Component {
  constructor(props,context) {
        super(props,context);
        
        


    }

    componentWillReceiveProps(nextProps) {
    
  }

    
    
    
    render() {

        return (
          <div className="home-view jumbotron">
            Hi
              <Modal loading={this.props.loading} showModal={this.props.showModal} details={this.props.details} title={this.props.title}/>
              <ErrorDisplay hasError={this.props.hasError} title={this.props.title} details={this.props.details} />
              <ErrorDisplay hasError={this.props.nonCriticalError} title={this.props.title} details={this.props.details} />
          </div>





        );
    }
}
HomePage.defaultProps={
  hasError:false,
  nonCriticalError:false,
  title:"",
  details:"",
  loading:false,
  showModal: false
};
HomePage.propTypes = {
  hasError:PropTypes.bool,
  nonCriticalError:PropTypes.bool,
  title:PropTypes.String,
  details:PropTypes.Sting,
  loading: PropTypes.bool,
  showModal:PropTypes.bool
};
function mapStateToProps(state,ownProps){

  return{
    };
  }

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(baseActions,dispatch)
  };
}


//export default HomePage;

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
