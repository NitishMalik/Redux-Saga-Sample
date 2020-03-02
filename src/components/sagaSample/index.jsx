import React from "react";
import { connect } from "react-redux";
import { OnIncrement, OnDecrement } from "../../redux/sagaSample/sagaActions";
import Card from "../card";

const SagaSample = ({ value, onIncrement, onDecrement }) => (
  <Card>
    <p>{value}</p>
    <button onClick={onIncrement}> Increment 1 </button>
    <button onClick={onDecrement}> Decrement 1</button>
  </Card>
);

const mapStateToProps = state => ({
  value: state.saga.value
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(OnIncrement()),
  onDecrement: () => dispatch(OnDecrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(SagaSample);
