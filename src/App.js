
function App() {

  const tapBtn = () => {
    window.electron.send('open-page')
  }
  
  return (
    <div className="App">
      <button onClick={tapBtn}>按钮111222</button>
    </div>
  );
}

export default App;
