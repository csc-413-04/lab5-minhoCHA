export const doTest = () => ({
    type: 'SET_TEST',
    test: 'some text',
});

export const loadAllMessages = (messages) => ({
    type: 'LOAD_MESSAGES',
    messages,
});

export const importMessage = (messages) => ({
    type: 'IMPORT_MESSAGE',
    messages,
});