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

class Create extends Component {
    state = {
        start: '',
        target: '',
        symbols: 'Right'
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
        <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Current Location"
          value={this.state.name}
          onChange={this.handleChange('start')}
          margin="auto"
        />
        <TextField
          id="standard-name"
          label="Destination"
          value={this.state.name}
          onChange={this.handleChange('target')}
          margin="auto"
        />
        </form>
        <Card>
            <CardActions>
                <Row>
                    <Col>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                value={this.state.symbols}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col>
                        <Typography gutterBottom>
                            Turn Right
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col>
                        <Typography gutterBottom>
                           UPLOAD PICTURE
                        </Typography>
                    </Col>
                </Row>
      </CardActions>
    </Card>
    <Card>
            <CardActions>
                <Row>
                    <Col>
                        <FormControl>
                            <InputLabel>Path</InputLabel>
                            <Select
                                value={this.state.symbols}
                                onChange={this.handleChangeDropDown}
                                inputProps={{
                                    name: 'symbols',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col>
                        <Typography gutterBottom>
                            Turn Right
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            walk 150m.
                        </Typography>
                    </Col>
                    <Col>
                        <Typography gutterBottom>
                           UPLOAD PICTURE
                        </Typography>
                    </Col>
                </Row>
      </CardActions>
    </Card>
      </div>
    );
  }
}

export default Create;