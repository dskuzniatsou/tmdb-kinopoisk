
import s from './App.module.css'


import {Footer} from "@/common/components/Footer/Footer.tsx";
import {Routing} from "@/common/routing";
import {Header} from "@/common/components";

export const App = ()=> {

  return (
      <>
        <Header />
        {/*{isGlobalLoading && <LinearProgress />}*/}
        <div className={s.layout}>
          <Routing />
        </div>
          <Footer />
        {/*<ToastContainer />  // для отображения ошибок  в виде всплывающих окон*/}
      </>
  )
}