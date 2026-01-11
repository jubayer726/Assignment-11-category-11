import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import Profile from '../pages/Dashboard/Common/Profile'
import MainLayout from '../layouts/MainLayout'
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
import TuitionDetails from '../pages/TuitionList/TuitionDetails'
import TutorDetails from '../pages/TutorSection/TutorDetails'
import UpdateTuition from '../pages/TuitionList/UpdateTuitionPage'
import PaymentSuccess from '../pages/Payments/PaymentSuccess'
import PayemtCancel from '../pages/Payments/PayemtCancel'
import UpdateProfile from '../pages/Dashboard/Common/UpdateProfile'
import MyTuitions from '../Dashboboard/StudentDashboard/MyTuitions'
import EditTuition from '../Dashboboard/StudentDashboard/EditTuition'
import UsersManagement from '../Dashboboard/AdminDashboard/UsersManagement'
import AdminRoute from './AdminRoute'
import AdminReports from '../Dashboboard/AdminDashboard/AdminReports'
import TuitionTypes from '../components/Home/TuitionType/TuitionType'
import HowItWorks from '../components/Home/HowItWork/HowItWorks'
import Dashboard2 from '../Dashboboard/Dashboard2'


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
        path: 'dashboard2',
        element: <Dashboard2 />,
      },
      {
        path: '/tuition/:id',
        element: <TuitionDetails/>
      },
      {
        path: '/tutor/:id',
        element: <TutorDetails/>
      },
      {
        path: '/tution-type',
        element: <TuitionTypes/>
      },
      {
        path: '/howIt-work',
        element: <HowItWorks/>
      },
      {
        path: '/payment-success',
        element: <PaymentSuccess/>
      },
       {
        path: '/payment-cancel',
        element: <PayemtCancel/>
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashBoard/>
      </PrivateRoute>
    ),
    children: [
      {
        // index: true,
        path: 'admin-dashboard',
        element: (
          <AdminRoute>
            <AdminDashboard/>
          </AdminRoute>
        ),
      },
      {
        path: 'users-management',
        element: (
          <PrivateRoute>
            <AdminRoute>
            <UsersManagement/>
          </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'reports',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminReports/>
            </AdminRoute>
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
        path: 'student-form',
        element: (
          <PrivateRoute>
            <Register/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-tuition',
        element: (
          <PrivateRoute>
            <MyTuitions />
          </PrivateRoute>
        ),
      },
      {
        path: 'edit-tuition/:id',
        element: <EditTuition/>
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
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile/>
          </PrivateRoute>
        ),
      },
    
    ],
  },
])
