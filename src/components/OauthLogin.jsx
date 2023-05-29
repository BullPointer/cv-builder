import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function OauthLogin() {

  return (
    <div>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}
