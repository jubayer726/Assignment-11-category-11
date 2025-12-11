import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PlantDetails from '../pages/PlantDetails/PlantDetails'
import PrivateRoute from './PrivateRoute'
// import DashboardLayout from '../layouts/DashboardLayout'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import MyInventory from '../pages/Dashboard/Seller/MyInventory'
import ManageOrders from '../pages/Dashboard/Seller/ManageOrders'
import MyOrders from '../pages/Dashboard/Customer/MyOrders'
import { createBrowserRouter } from 'react-router'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import TuisionList from '../pages/TuitionList/TuitionList'
import TuisorSection from '../pages/TutorSection/TuitorSection'
import Register from '../pages/Dashboard/Seller/Register'
import DashBoard from '../Dashboboard/Dashboard'
import StudentDashboard from '../Dashboboard/StudentDashboard/StudentDashboard'
import TutorDashboard from '../Dashboboard/TutorDashboard/TutorDashboard'
import TutorForm from '../Dashboboard/TutorDashboard/TutorForm'
import AdminDashboard from '../Dashboboard/AdminDashboard/AdminDashboard'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'tuitions',
        element: <TuisionList/>,
      },
      {
        path: 'tutors',
        element: <TuisorSection/>,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '/plant/:id',
        element: <PlantDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        {/* <DashboardLayout /> */}
        <DashBoard/>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'student-form',
        element: (
          <PrivateRoute>
            <Register/>
          </PrivateRoute>
        ),
      },
      // {
      //   path: 'my-inventory',
      //   element: (
      //     <PrivateRoute>
      //       <MyInventory />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <ManageUsers />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'student-dashboard',
        element: (
          <PrivateRoute>
            <StudentDashboard/>
          </PrivateRoute>
        ),
      },
      {
        path: 'tutor-dashboard',
        element: (
          <PrivateRoute>
            <TutorDashboard/>
          </PrivateRoute>
        ),
      },
      {
        path: 'tutor-form',
        element: (
          <PrivateRoute>
            <TutorForm/>
          </PrivateRoute>
        ),
      },
       {
        path: 'admin-dashboard',
        element: (
          <PrivateRoute>
            <AdminDashboard/>
          </PrivateRoute>
        ),
      },
      // {
      //   path: 'my-orders',
      //   element: (
      //     <PrivateRoute>
      //       <MyOrders />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-orders',
      //   element: <ManageOrders />,
      // },
    
    ],
  },
])
