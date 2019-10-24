import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import service from '../services/account.service'
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Accounts extends React.Component {
  state = {
    accounts: [],
    isLoading: false,
    err: null,
  }
  componentDidMount() {
    // let data = await service.findAll()
    // this.setState({accounts: data})
    this.setState({ isLoading: true, err: null })
    service.findAll()
      .then(res => res.json())
      .then(data => {
        this.setState({ accounts: data.data, isLoading: false, err: null })
      }).catch(err => {
        this.setState({ err: err, isLoading: false, data: [] })
      })
  }
  render() {
    return (
      <React.Fragment>
        <h3> Accounts </h3>
        {this.state.err ? <p>{this.state.err.message}</p> : null}
        {
          this.state.isLoading ?
            <CircularProgress isLoading={this.state.isLoading} />
            :
            <List>
              {this.state.accounts.map((item, index) => (
                <ListItem button key={index} >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
        }
      </React.Fragment>
    )
  }
}