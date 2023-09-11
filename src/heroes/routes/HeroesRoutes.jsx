import { Navigate, Route, Routes } from "react-router-dom"
import {DcPage, MarvelPage, SearchPage} from '../pages'
import { Navbar } from "../../ui/components/Navbar"
import { HeroPage } from "../pages/HeroPage"


export const HeroesRoutes = () => {
  return (
    <>

      <Navbar />


      <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />


      </Routes>

    </>
  )
}
