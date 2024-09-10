import {create} from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),

    // User Slice
    user: {
        name: 'Vedat Cinbat',
        age: 30,
    },
    setUserName: (name) => set(state => ({
        user: {
            ...state.user,
            name: name
        }
    })),
    fetchUser: async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        set({user: data})
    },

    // Cart Slice
    cart: [],
    addToCart: (item) => set(state => ({cart: [...state.cart, item]}))
}))

export default useStore;