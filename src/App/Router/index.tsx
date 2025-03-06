import { BrowserRouter, Route, Routes } from "react-router";
import { RootRoute } from "../../routes/root/index.tsx";
import {DetailRoute} from"../../routes/details/index.tsx";
export const AppRouter=() =>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/details/:id" element={<DetailRoute />} />
    </Routes>
    </BrowserRouter>
    
}


