import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stafflogin from "./Stafflogin";
import Studentlogin from "./Studentlogin";
import StaffDashboard from "./StaffDashboard";
import Addstudent from "./Addstudent";
import Task from "./Task";
import Analysis from "./Analysis";
import QuizPortal from "./QuizPortal";
import Stfview from "./Stfview";
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
          {path:'stfview',element:<Stfview/>}
      ]
    }

  ])


  return (
   <RouterProvider router={route}/>
  );
}
export default App;