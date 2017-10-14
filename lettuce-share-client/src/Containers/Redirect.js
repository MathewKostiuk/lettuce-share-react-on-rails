import { connect } from 'react-redux';
import { fireRedirect } from '../Actions/auth';
import LogInPage from '../Components/LogInPage';
import RegisterPage from '../Components/RegisterPage';

const mapStateToProps = state => {
  return {
    redirect: state.auth.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fireRedirect: () => {
      dispatch(fireRedirect())
    }
  }
}

export const ActiveLoginPage = connect(mapStateToProps, mapDispatchToProps)(LogInPage);

export const ActiveRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);