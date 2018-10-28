import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
        <i class="material-icons">add</i>
      </Button>
      <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
        <i class="material-icons">edit</i>
      </Button>
      <Button variant="fab" disabled aria-label="delete" className={classes.button}>
        <i class="material-icons">delete</i>
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);