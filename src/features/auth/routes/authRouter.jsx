import AuthLayout from "../layouts/authLayouts";
import RegisterForm from "../pages/regsiter";
import Login from "../pages/login";
const AuthRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {path: "register", element: <RegisterForm />},
      {path: "login", element: <Login />},
    ],
  },
];

export default AuthRoutes;
