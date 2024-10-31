module.exports = { 
    extends: ['@commitlint/config-conventional'],
    prompt: {
        messages: {},
        questions: {
          type: {
            description: 'please input type:',
          },
        },
      },
};