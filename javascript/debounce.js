// Debounce function in javscript 

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout();
      func(...args)
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
};

function handleSearch(searchTerm) {
  console.log(`Searching for: ${searchTerm}`);
}

// Create a debounced version that waits 300ms
const debouncedSearch = debounce(handleSearch, 300);

// These calls will be collapsed into the last one
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app");
debouncedSearch("appl");
debouncedSearch("apple");

// This one will execute after another 300ms
setTimeout(() => {
  debouncedSearch("orange");
}, 500);
