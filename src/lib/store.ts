/**
 * Global state management using Zustand
 * 
 * This file defines the global state store for the application.
 * It includes authentication state, user preferences, and UI state.
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the types for our store
interface User {
  id: string;
  email?: string;
  name?: string;
  avatar_url?: string;
  subscription_tier?: 'free' | 'basic' | 'premium';
}

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
}

interface AppState {
  // Auth state
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // User preferences
  preferences: UserPreferences;
  
  // UI state
  sidebarOpen: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setPreferences: (preferences: Partial<UserPreferences>) => void;
  setSidebarOpen: (value: boolean) => void;
  logout: () => void;
}

// Create the store with persistence for user preferences
const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: true,
      preferences: {
        theme: 'system',
        notifications: true,
      },
      sidebarOpen: false,
      
      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setIsAuthenticated: (value) => set({ isAuthenticated: value }),
      setIsLoading: (value) => set({ isLoading: value }),
      setPreferences: (preferences) => 
        set((state) => ({ 
          preferences: { ...state.preferences, ...preferences } 
        })),
      setSidebarOpen: (value) => set({ sidebarOpen: value }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ preferences: state.preferences }), // Only persist preferences
    }
  )
);

export default useAppStore; 