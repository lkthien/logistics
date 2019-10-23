import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

export default class Accounts extends React.Component {
    state = {
      accounts: []
    }
    async componentDidMount() {
      let url = "http://localhost:3001/api/accounts"
      let res = await fetch(url)
      let data = await res.json()
      this.setState({accounts: data.data})
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