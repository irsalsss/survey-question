export const CREATE_DEFAULT_STATE = {
  question: '',
  options: [
    { id: 1, rule: 'may_select', answer: '' }
  ],
}

export const OPTIONS_ROLE = [
  { id: 'may_select', label: 'May Select' },
  { id: 'must_select', label: 'Must Select' }
]

export const MAX_ADD_RESPONDENT_OPTIONS = 5;