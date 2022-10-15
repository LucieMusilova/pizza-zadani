import React, { createContext,  useContext } from 'react';

export const SettingsContext = createContext();

export const usePrefs = () => useContext(SettingsContext);