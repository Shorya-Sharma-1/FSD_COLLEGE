const container = document.getElementById('root');

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2', {style:{color: 'red', backgroundColor: 'cyan'}}, 'Welcome to web development');
root.render(h2)