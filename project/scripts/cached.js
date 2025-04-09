// This module provides functions to cache and retrieve items from local storage.
export function cacheItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function getCachedItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  