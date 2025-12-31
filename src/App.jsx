import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';
import BottomNav from './components/BottomNav';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import Events from './pages/Events';
import Live from './pages/Live';
import Speakers from './pages/Speakers';
import Tickets from './pages/Tickets';
import Profile from './pages/Profile';
import EventDetail from './pages/EventDetail';
import IFPortal from './pages/IFPortal';
import Contact from './pages/Contact';
import { AuthProvider, useAuth } from './context/AuthContext';
import { COLORS, LAYOUT } from './theme';

const Layout = ({ children }) => {
    const location = useLocation();
    const hideNav = ['/', '/landing', '/login'].includes(location.pathname);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
            {!hideNav && <BottomNav />}
        </View>
    );
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />

                        {/* Protected Routes */}
                        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
                        <Route path="/events/:id" element={<ProtectedRoute><EventDetail /></ProtectedRoute>} />
                        <Route path="/live" element={<ProtectedRoute><Live /></ProtectedRoute>} />
                        <Route path="/speakers" element={<ProtectedRoute><Speakers /></ProtectedRoute>} />
                        <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="/portal" element={<ProtectedRoute><IFPortal /></ProtectedRoute>} />
                        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        maxWidth: LAYOUT.maxWidth,
        backgroundColor: COLORS.bgDark,
        position: 'relative',
    },
});

export default App;
