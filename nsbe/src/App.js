function App() {

    return (
      <div>
        <NavBar/>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    );
}

export default App;