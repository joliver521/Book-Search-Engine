import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
    concat,
} from '@apollo/client';

const httpLink = new HttpLink({ uri: '/graphql' });
const authLink = new ApolloLink((operation, forward) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }));
    return forward(operation);
});

const client = new ApolloClient({
    link: concat(authLink, httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<SearchBooks />} />
                        <Route path="/saved" element={<SavedBooks />} />
                        <Route
                            path="*"
                            element={<h1 className="display-2">Wrong page!</h1>}
                        />
                    </Routes>
                </>
            </Router>
        </ApolloProvider>
    );
}

export default App;
