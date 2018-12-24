import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Topnav from './Topnav';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'react-bootstrap';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import location from '../assets/location.svg'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

class Create extends Component {
    state = {
        start: '',
        target: '',
        symbols1: 'Right',
        symbols2: 'Right'
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
      handleChangeDropDown = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      

  render() {
    return (
      <div className="App">
        <Topnav />
        <form noValidate autoComplete="off" style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, marginBottom: 20, backgroundColor: '#2DB1FC' }}>
          <div className="d-flex align-items-center" style={{marginBottom: 20}}>
            <img className="align-self-end" style={{marginBlockEnd: 5}} src={location} />
            <TextField
              style={{marginLeft: 20}}
              id="standard-name"
              label="Your Location"
              value={this.state.location}
              onChange={this.handleChange('location')}
              margin="auto"
              width="100%"
            />
          </div>
          <div className="d-flex align-items-center" style={{marginBottom: 20}}>
            <TextField
              style={{marginLeft: 40}}
              id="standard-name"
              label="Destination"
              value={this.state.destination}
              onChange={this.handleChange('destination')}
              margin="auto"
              width="100%"
            />
          </div>
        </form>
        <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
            <CardActions>
                <Row className='justify-content-center'>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                id='sel2'
                                value={this.state.symbols2}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols2',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={"Turn left"}>Left</MenuItem>
                                <MenuItem value={"Turn right"}>Right</MenuItem>
                                <MenuItem value={"Forward"}>Forward</MenuItem>
                                <MenuItem value={"Go escalator"}>Escalator</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <Typography gutterBottom>
                            Turn Left
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                    <Button variant="contained" size="small">
                    <IconButton color="primary"  component="span">
          <             PhotoCamera />
                    </IconButton>
                    </Button>
                    </Col>
                </Row>
            </CardActions>
        </Card>
            <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
            <CardActions>
                <Row className='justify-content-center'>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                id='sel2'
                                value={this.state.symbols2}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols2',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={"Turn left"}>Left</MenuItem>
                                <MenuItem value={"Turn right"}>Right</MenuItem>
                                <MenuItem value={"Forward"}>Forward</MenuItem>
                                <MenuItem value={"Go escalator"}>Escalator</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <Typography gutterBottom>
                            Turn Left
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                    <Button variant="contained" size="small">
                    <IconButton color="primary"  component="span">
          <             PhotoCamera />
                    </IconButton>
                    </Button>
                    </Col>
                </Row>
            </CardActions>
        </Card>
        <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
            <CardActions>
                <Row className='justify-content-center'>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                id='sel2'
                                value={this.state.symbols2}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols2',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={"Turn left"}>Left</MenuItem>
                                <MenuItem value={"Turn right"}>Right</MenuItem>
                                <MenuItem value={"Forward"}>Forward</MenuItem>
                                <MenuItem value={"Go escalator"}>Escalator</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <Typography gutterBottom>
                            Turn Left
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                    <Button variant="contained" size="small">
                    <IconButton color="primary"  component="span">
          <             PhotoCamera />
                    </IconButton>
                    </Button>
                    </Col>
                </Row>
            </CardActions>
        </Card>
        <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
            <CardActions>
                <Row className='justify-content-center'>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                id='sel2'
                                value={this.state.symbols2}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols2',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={"Turn left"}>Left</MenuItem>
                                <MenuItem value={"Turn right"}>Right</MenuItem>
                                <MenuItem value={"Forward"}>Forward</MenuItem>
                                <MenuItem value={"Go escalator"}>Escalator</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                        <Typography gutterBottom>
                            Turn Left
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20}} className='justify-content-center'>
                    <Button variant="contained" size="small">
                    <IconButton color="primary"  component="span">
          <             PhotoCamera />
                    </IconButton>
                    </Button>
                    </Col>
                </Row>
            </CardActions>
        </Card>
    </div>
    );
  }
}

export default Create;