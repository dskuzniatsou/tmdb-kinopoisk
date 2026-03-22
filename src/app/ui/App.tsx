
import s from './App.module.css'
import {Header} from "../../common/components/Header/Header.tsx";
import {Routing} from "../../common/routing";

export const App = ()=> {

  return (
      <>
        <Header />
        {/*{isGlobalLoading && <LinearProgress />}*/}
        <div className={s.layout}>
          <Routing />
        </div>
        {/*<ToastContainer />  // для отображения ошибок  в виде всплывающих окон*/}
      </>
  )
}