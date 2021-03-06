import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const CustomAlert = ({ errors }) => {
  useEffect(() => {
    M.AutoInit();
  }, [errors]);

  //eslint-disable-next-line
  errors.map(error => {
    if (error.alertType === 'success') {
      M.toast({ html: error.msg, classes: 'green' });
    }

    if (error.alertType === 'fail') {
      M.toast({ html: error.msg, classes: 'red' });
    }

    if (error.alertType === 'info') {
      M.toast({ html: error.msg, classes: 'grey' });
    }
  });

  return <div />;
};

const mapStateToProps = state => ({
  errors: state.alert
});

export default connect(mapStateToProps)(CustomAlert);
