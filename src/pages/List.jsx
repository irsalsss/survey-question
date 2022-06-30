import React, { useState } from 'react';
import shallow from 'zustand/shallow';
import { Typography, Empty } from 'antd';
import useStoreQuestion from '../store/question';
import { isEmpty } from '../utils/general';
import SharedDragAndDrop from '../components/SharedDragAndDrop';

const { Title } = Typography;

const List = () => {
  const { questionData, changeQuestionData } = useStoreQuestion(
    (state) => ({
      questionData: state.questionData,
      changeQuestionData: state.changeQuestionData
    }),
    shallow
  );

  return (
    <div id="container-list flex flex-1">
      <Title level={2}>List of Questions</Title>

      { isEmpty(questionData) ? (
        <div className='mt-[128px]'>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      ) : (
        <div className='w-full'>
          <SharedDragAndDrop items={questionData} onReorder={changeQuestionData} />
        </div>
      ) }
    </div>
  )
}

export default List