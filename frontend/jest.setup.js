// Mock fetch
global.fetch = jest.fn();

// Mock console.error
global.console.error = jest.fn();

// Mock DOM elements
document.body.innerHTML = `
  <form id="task-form">
    <input type="text" id="task-input" />
  </form>
  <ul id="task-list"></ul>
`; 