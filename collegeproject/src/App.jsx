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
function App(){

  const route=createBrowserRouter([
    {
      path:'/',
      element:<StaffDashboard/>
    },

    {
      path:'/stafflogin',
      element:<Stafflogin/>
    },
    {
      path:'/studentlogin',
      element:<Studentlogin/>
    },
    {
      path:'/staffdash',
      element:<StaffDashboard/>,
      children:[
          { index: true, element: <div>Dashboard Home</div> },
          {path:'addstudent', element:<Addstudent/>},
          {path:'task',element:<Task/>},
          {path:'analysis',element:<Analysis/>},
          {path:'quiz', element:<QuizPortal/>},
          {path:'stfview/:id',element:<Stfview/>},
          {path:'creategroup',element:<Creategroup/>}
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
      path:'/',
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