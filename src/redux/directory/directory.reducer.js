const INITIAL_STATE = {
    
    sections: [
        
    {
        title: 'women',
        imageUrl:' https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        size: 'large',
        id: 1,
        linkUrl: 'shop/women'
    },

    {
        title: 'men',
        imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        size: 'large',
        id: 2,
        linkUrl: 'shop/men'
    },

    {    
        title: 'hats',
        imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        id: 3,
        linkUrl: 'shop/hats'
    },

    {
        title: 'jackets',
        imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        id: 4,
        linkUrl: 'shop/jackets'
    },

    {
        title: 'sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1516383286093-f90be8db5d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        id: 5,
        linkUrl: 'shop/sneakers'
    },
        
    ]
}

const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer