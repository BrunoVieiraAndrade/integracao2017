import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ThumbCard from '../common/thumbcard';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'


const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});



class VisaoGeral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: apresentacaoJson.titulo,
      conteudo: apresentacaoJson.conteudo,
    };
  }

  render(){
    const classes = this.props.classes;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Grid container spacing={16} align='center'>
        <ThumbCard titulo="Apresentação" iconName='puzzle' url='/apresentacao' />
        <ThumbCard titulo="Apresentação" iconName='puzzle' url='/apresentacao' />
        <ThumbCard titulo="Apresentação" iconName='puzzle' url='/apresentacao' />
        <ThumbCard titulo="Apresentação" iconName='puzzle' url='/apresentacao' />
      </Grid>
    );
  }
}

function VisaoGeral(props) {
}

VisaoGeral.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisaoGeral);