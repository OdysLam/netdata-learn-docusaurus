/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {useState, useCallback, useEffect} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useThemeConfig, createStorageSlot} from '@docusaurus/theme-common';
const ThemeStorage = createStorageSlot('theme');
const themes = {
  light: 'light',
  dark: 'dark',
};

// Ensure to always return a valid theme even if input is invalid
const coerceToTheme = (theme) => {
  return theme === themes.dark ? themes.dark : themes.light;
};

const getInitialTheme = (defaultMode) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return coerceToTheme(defaultMode);
  }

  return coerceToTheme(document.documentElement.getAttribute('data-theme'));
};

const storeTheme = (newTheme) => {
  createStorageSlot('theme').set(coerceToTheme(newTheme));
};

const useTheme = () => {
  const {
    colorMode: {defaultMode, disableSwitch, respectPrefersColorScheme},
  } = useThemeConfig();
  const [theme, setTheme] = useState(getInitialTheme(defaultMode));
  const setLightTheme = useCallback(() => {
    setTheme(themes.light);
    storeTheme(themes.light);
  }, []);
  const setDarkTheme = useCallback(() => {
    setTheme(themes.dark);
    storeTheme(themes.dark);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', coerceToTheme(theme));
    // Begin edit. Here, we're adding a `light` or `dark` class to the `<html>`
    // element to ensure that Tailwind can see that we've switched themes.
    document.documentElement.classList.length > 0 && document.documentElement.classList.remove(...document.documentElement.classList)
    document.documentElement.classList.add(theme)
    // End edit.
  }, [theme]);
  useEffect(() => {
    if (disableSwitch) {
      return;
    }

    try {
      const storedTheme = ThemeStorage.get();

      if (storedTheme !== null) {
        setTheme(coerceToTheme(storedTheme));
      }
    } catch (err) {
      console.error(err);
    }
  }, [setTheme]);
  useEffect(() => {
    if (disableSwitch && !respectPrefersColorScheme) {
      return;
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener(({matches}) => {
        setTheme(matches ? themes.dark : themes.light);
      });
  }, []);
  return {
    isDarkTheme: theme === themes.dark,
    setLightTheme,
    setDarkTheme,
  };
};

export default useTheme;
