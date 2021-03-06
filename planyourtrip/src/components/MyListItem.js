import React from 'react';
import {Icon, List} from 'antd';



export class MyListItem extends React.Component {

  handleUp = () => {
    this.props.handleUp(this.props.item.id);
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.item.id);
  }

  render() {
    console.log("myListComponent",this.props.item);
    return(
      <List.Item key={this.props.item.id}>
        <List.Item.Meta
          title={this.props.item.name}
        />
        <div><a onClick={this.handleUp}><Icon type="arrow-up" /></a> or <a onClick={this.handleDelete}><Icon type="delete" /></a></div>
      </List.Item>
    );
  }

}