import messageDataReducer from "./reducers/messagesDataReducer";
import messagePostDataReducer from "./reducers/messagesPostDataReducer";
import addLikeReducer from "./reducers/addLikeReducer";

export const store = {
    state: {
        user: [
            {
                id: 1,
                name: 'Nikolay',
                birthday: '31 July',
                city: 'Togliatty',
                education: 'TGU`21',
                site: 'https://devilz-my-portfolio.000webhostapp.com/',
                avatar: 'http://pics.vesti.ru/p/b_400146.jpg',
                photo: [
                    {id: '1', link_href: 'http://via.placeholder.com/200x100'},
                    {id: '2', link_href: 'http://via.placeholder.com/200x100'},
                    {id: '3', link_href: 'http://via.placeholder.com/200x100'},
                    {id: '4', link_href: 'http://via.placeholder.com/200x100'},
                ]
            }
        ],
        messagesData: [
            {id: 1, messages: 'Hi', author: 2},
            {id: 2, messages: 'How are you', author: 2},
            {id: 3, messages: ':-)', author: 3},
            {id: 4, messages: 'Привет чудик)', author: 1},
            {id: 5, messages: 'Как настрой?)', author: 3},
            {id: 6, messages: ')))', author: 3},
            {id: 7, messages: 'Ты пойдёшь?', author: 1},
            {id: 8, messages: 'Будет весело', author: 1},
            {id: 9, messages: 'Окай(', author: 2},
            {id: 10, messages: 'Потом увидимся)))', author: 1}
        ],
        dialogsData: [
            {id: 1, name: 'Maria'},
            {id: 2, name: 'Jonathan'},
            {id: 3, name: 'Patrick'},
        ],
        messagesPostData: [
            {id: 1, message: "How is it going?", like: 12, recipient: 1, author: 'Mike'},
            {id: 2, message: "Long time no see!", like: 1, recipient: 1, author: 'Jessica'},
            {id: 3, message: "Take care!", like: 2, recipient: 1, author: 'Rob'},
            {id: 4, message: "Have a nice day!", like: 5, recipient: 3, author: 'Amanda'},
            {id: 5, message: "Say hi to …", like: 4, recipient: 2, author: 'Rob'},
            {id: 6, message: "Send my love to", like: 5, recipient: 3, author: 'Amanda'},
            {id: 7, message: "How's life?", like: 5, recipient: 3, author: 'Amanda'},
            {id: 8, message: "How are things?", like: 3, recipient: 1, author: 'Mike'},
            {id: 9, message: "What are you up to?", like: 1, recipient: 2, author: 'Rob'},
            {id: 10, message: "Until we meet again!", like: 2, recipient: 2, author: 'Piper'},
            {id: 11, message: "What have you been up to?", like: 1, recipient: 3, author: 'Scott'},
            {id: 12, message: "I’m so sorry!", like: 2, recipient: 2, author: 'Piper'},
            {id: 13, message: "Don’t worry about it!", like: 4, recipient: 1, author: 'Rob'},
            {id: 14, message: "May I help you?", like: 7, recipient: 3, author: 'Scott'},
            {id: 15, message: "Thank you anyway!", like: 5, recipient: 1, author: 'Rob'},
            {id: 16, message: "It’s very kind of you!", like: 11, recipient: 1, author: 'Jessica'},
            {id: 17, message: "Don’t take it to heart.", like: 2, recipient: 1, author: 'Jessica'},
            {id: 18, message: "Where were we?", like: 0, recipient: 2, author: 'Piper'},
            {id: 19, message: "Oh, that. That explains it.", like: 9, recipient: 2, author: 'Piper'},
        ]
    },
    rerenderEntireTree: () => {
        console.log('State change');
    },
    subscribe: (observer) => {
        store.rerenderEntireTree = observer;
    },
    getState: () => {
        return store.state;
    },
    dispatch: (action) => {
        store.state.messagesData = messageDataReducer(store.state.messagesData, action);
        store.state.messagesPostData = messagePostDataReducer(store.state.messagesPostData, action);
        store.state.messagesPostData = addLikeReducer(store.state.messagesPostData, action);

        store.rerenderEntireTree();
    }
};

export default (store);
window.store = store;