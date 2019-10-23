import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import service from '../services/account.services'
export default class Accounts extends React.Component {
    state = {
      accounts: []
    }
    async componentDidMount() {
      let data = await service.findAll()
      this.setState({accounts: data})
    }
    render() {
      return <List>{this.state.accounts.map((item, index) => (
        <ListItem button key={index} >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
    }
  }