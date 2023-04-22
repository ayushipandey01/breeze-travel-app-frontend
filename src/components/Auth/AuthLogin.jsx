import "./Auth.css";

export const AuthLogin = () => {
  return (
    <div className="auth-container">
      <form>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number<span className="asterisk">*</span>
          </label>
          <input
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
        <div className="cta">
          <button className="button btn-outline-primary cursor-pointer">
            Login with test credentials
          </button>
        </div>
      </form>
    </div>
  );
};
