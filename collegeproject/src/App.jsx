import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stafflogin from "./Stafflogin";
import Studentlogin from "./Studentlogin";
import StaffDashboard from "./StaffDashboard";
import Addstudent from "./Addstudent";
import Task from "./Task";
import Analysis from "./Analysis";
import QuizPortal from "./QuizPortal";
import Stfview from "./Stfview";
import Creategroup from "./Creategroup";
import StudentWelcome from "./StudentWelcome";
import StudentDash from "./StudentDash";
import Taketest from "./Taketest";
import StdAnalysis from "./StdAnalysis";
import Quizhistory from "./Quizhistory";
import History from "./History";
import Dude from "./dude";
import AuthGuard from "./AuthGuard";
function App(){

  const route=createBrowserRouter([
    {path:'/',
      element:<Stafflogin/>
    },
    {
      path:'/staff',
      element:<StaffDashboard/>
    },

    // {
    //   path:'/stafflogin',
    //   element:<Stafflogin/>
    // },
    {
      path:'/studentlogin',
      element:<Studentlogin/>
    },
    {
      path:'/staffdash',
      element:(
        <AuthGuard allowedRoles={['staff']}>
          <StaffDashboard/>
          </AuthGuard>
      ),
      children:[
          { index: true, element: <div>Dashboard Home</div> },
          {path:'addstudent', element:<Addstudent/>},
          {path:'task',element:<Task/>},
          {path:'analysis',element:<Analysis/>},
          {path:'quiz/:id', element:<QuizPortal/>},
          {path:'stfview/:id',element:<Stfview/>},
          {path:'creategroup',element:<Creategroup/>},
          {path:'history',element:<Quizhistory/>},
          {path:'questions/:id',element:<History/>}
      ]
    },
    {
      path:'studentlogin',
      element:<Studentlogin/>
    },{
      path:'/studentwelcome/:studentname',
      element:<StudentWelcome/>
    },{
      // path:'/studentdash/:studentname',
      // path:'/',
      element:<StudentDash/>,
      children:[
      {path:'taketest',element:<Taketest/>},
      {path:'stdanalysis',element:<StdAnalysis/>}
      ]
    }

  ])


  return (
   <RouterProvider router={route}/>
  );
}
export default App;