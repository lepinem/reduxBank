// UserTransactions.js

//normal react imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
//our action creator to select a user
import { withdrawFunds }  from '../store/actions'


// The props that UserList receives come from state.
// the mapStateToProps function below does this for us.

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={this.toggle}
          style={{ margin: "5px 0px" }}
        >
          Withdraw Funds
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Withdraw Funds</ModalHeader>
          <ModalBody>How much would you like to withdraw?</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={e => {
                this.toggle();
                return this.props.withdrawFunds(5);
              }}
            >
              $5
            </Button>
            <Button
              color="secondary"
              onClick={e => {
                this.toggle();
                return this.props.withdrawFunds(10);
              }}
            >
              $10
            </Button>
            <Button
              color="info"
              onClick={e => {
                this.toggle();
                this.props.withdrawFunds(20)
              }}
            >
              $20
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount,

  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transactions);
