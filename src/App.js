const App = () => {
    return (
        <div className="app">
          <Routes> 
            <HomeLayoutRoute path="/" element={<Home />} />
            <PrivateRoute path="/" element={<PrivateScreen/>} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/register" element={<RegisterScreen/>} />
            <Route path="/forgotpassword" element={<ForgotPasswordScreen/>}/>
            <Route path="/passwordreset/:resetToken" element={<ResetPasswordScreen/>}/>
          </Routes>
        </div>
    );
  };