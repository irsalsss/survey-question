import React, { useState } from 'react';
import { Typography, Input, message, Button } from 'antd';
import {
  CREATE_DEFAULT_STATE,
  MAX_ADD_RESPONDENT_OPTIONS,
  OPTIONS_ROLE
} from '../constant/create';
import useRoute from '../hook/useRoute';
import { deepClone } from '../utils/general';
import { v4 as uuidv4 } from 'uuid';
import SharedSelect from '../components/SharedSelect';

const { Title, Text } = Typography;

const Create = () => {
  const { goTo } = useRoute();
  const [form, setForm] = useState(CREATE_DEFAULT_STATE);
  const { question, options } = form;

  const onChange = (name, value, index) => {
    const newForm = deepClone(form);
    newForm[name] = value;
    setForm(newForm);
  }

  const onChangeRespondent = (name, value, index) => {
    const newForm = deepClone(form);
    newForm["options"][index][name] = value;
    setForm(newForm);
  }

  const addRespondentOption = () => {
    const newForm = deepClone(form);
    newForm.options.push({ 
      rule: 'may_select', 
      id: options[options.length - 1].id + 1,
      answer: ''
    })
    setForm(newForm);
  }

  const deleteRespondentOption = (index) => {
    const newForm = deepClone(form);
    newForm.options.splice(index, 1);
    setForm(newForm);
  }

  const onSubmit = () => {
    if (!question) {
      message.error("Question field must be filled", 100);
      return;
    }

    const newForm = deepClone(form);
    const prevSurveyData = JSON.parse(localStorage.getItem('surveyData')) || [];

    newForm.id = uuidv4();
    prevSurveyData.push(newForm);
    localStorage.setItem('surveyData', JSON.stringify(prevSurveyData));
    message.success("Question from successfully created");

    setForm(CREATE_DEFAULT_STATE);
    goTo('/');
  }

  return (
    <div id="container-create" className=''>
      <Title level={2}>Create a Question Form</Title>

      <div className='mb-5'>
        <Text>Question:</Text>
        <Input
          onChange={(e) => onChange('question', e.target.value)}
          value={question}
        />
      </div>

      <div className='flex flex-col mb-5'>
        <Text>Respondent Options:</Text>
        {options.map((opt, index) => (
          <div className="flex items-start justify-between" key={opt.id}>
            <div className="flex-[2]">
              <SharedSelect
                key={opt.id}
                value={opt.rule}
                options={OPTIONS_ROLE}
                onChange={(value) => onChangeRespondent("rule", value, index)}
              />
              <Input
                style={{ marginTop: 8, marginBottom: 8 }}
                placeholder='Answer'
                onChange={(e) => onChangeRespondent('answer', e.target.value, index)} 
                value={opt.answer}
              />
            </div>
            {options.length > 1 && (
              <Button
                className='ml-8'
                onClick={() => deleteRespondentOption(index)}
                type="primary"
                danger
              >
                Delete
              </Button>
            )}
          </div>
        ))}

        {options.length < MAX_ADD_RESPONDENT_OPTIONS && (
          <Button
            className="w-[100px]"
            onClick={addRespondentOption}
            type="primary"
          >
            Add more
          </Button>
        )}

        <Button
          className="mt-[40px]"
          onClick={onSubmit}
          type="primary"
        >
          Save question
        </Button>
      </div>
    </div>
  )
}

export default Create