import React, { useState } from 'react';
import shallow from 'zustand/shallow';
import useStoreQuestion from '../store/question';

const List = () => {
  const { questionData } = useStoreQuestion(
    (state) => ({
      questionData: state.questionData,
    }),
    shallow
  );
  return (
    <div>List</div>
  )
}

export default List