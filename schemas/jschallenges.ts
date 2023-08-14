export default {
  name: 'jschallenges',
  title: 'JS Challenges',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'source_code_link',
      title: 'Source Code Link',
      type: 'string',
    },
    {
      name: 'project_demo',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'medium'},
          {title: 'Hard', value: 'hard'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'contributor_name',
      title: 'Contributor Name',
      type: 'string',
    },
    {
      name: 'contributor_link',
      title: 'Contributor Link',
      type: 'string',
    },
    {
      name: 'companies',
      title: 'Asked in Companies',
      type: 'array',
      of: [
        {
          name: 'company',
          title: 'Company',
          type: 'string',
        },
      ],
    },
  ],
}
